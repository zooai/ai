import 'server-only'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'
import { cookies } from 'next/headers'
import { Database } from '@/lib/db_types'

import { auth } from '@/auth'
import { nanoid } from '@/lib/utils'
import app from '@/firebase/firebase'
import { getFirestore, doc, getDocs, setDoc, collection, query, where, addDoc} from "firebase/firestore"
import { Interface } from 'readline'

export const runtime = 'edge'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  const json = await req.json()
  const { messages, previewToken } = json
  console.log(json);

  const configHeader = {
    headers: {
      'Content-Type': 'application/json',
      Site: "trina_demo_lux",
    },
  }

  for (let i = 0; i < messages.length; i ++) {
    messages[i].content = [{
      type: "text",
      text: messages[i].content
    }];
  }

  const question = messages[messages.length - 1].content[0].text;
  const domain = true;
  const useGpt4 = true;
  const adminChatbot = false;
  const agent = "72b890ee-c76e-42e8-a7b1-fe78dbf8ac49";
  const temperature = 1;

  try {
    const response = await fetch('https://api.lux.chat/chatbot/question', {
      method: 'post',
      ...configHeader,
      body: JSON.stringify({
        question,
        domain,
        useGpt4,
        adminChatbot,
        messages,
        agent,
      }),
    })
    
    return response;
  } catch {
    const response = { status: 400, message: 'Data fetch error' };
    return response;
  }

}

const scrollToBottom = (containerID: string) => {
  const container = document.getElementById(containerID)
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    })
  }
}
