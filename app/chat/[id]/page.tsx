'use client'
import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { getChat } from '@/app/actions'
import { Chat } from '@/components/chat'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { getDocs, where, query } from "firebase/firestore"
import { docRef, db } from '@/firebase/firebase'
import { type Chats } from '@/lib/types'

export const runtime = 'edge'
export const preferredRegion = 'home'

export interface ChatPageProps {
  params: {
    id: string
  }
}

// export async function generateMetadata({
//   params
// }: ChatPageProps): Promise<Metadata> {
//   const chat = await getChat(params.id)
//   return {
//     title: chat?.title.toString().slice(0, 50) ?? 'Chat'
//   }
// }

export default function ChatPage({ params }: ChatPageProps) {
  const [authuser, setAuthuser] = useState(null)
  const id = params.id;
  let chat: any = null
  useEffect(() => {
    const list = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthuser(user)
      } else {
        setAuthuser(null)
      }
    })
  }, [])

  useEffect(() => {
    if (authuser)
      getChatData(id);
  }, [authuser, id])

  const getChatData = async (id: string) => {
    const q = query(docRef, where('user_id', '==', id))
    const snaps = await getDocs(q)  
    chat = snaps?.docs[0].data().payload as Chats
  }

  return <Chat id={chat?.id} initialMessages={chat?.messages} />
}
