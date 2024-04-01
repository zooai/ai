import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { getChat } from '@/app/actions'
import { Chat } from '@/components/chat'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

export const runtime = 'edge'
export const preferredRegion = 'home'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  const [authuser, setAuthuser] = useState(null)
  useEffect(() => {
    const list = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthuser(user)
      } else {
        setAuthuser(null)
      }
    })
  }, [])

  if (!authuser) {
    return {}
  }

  const chat = await getChat(params.id)
  return {
    title: chat?.title.toString().slice(0, 50) ?? 'Chat'
  }
}

export default async function ChatPage({ params }: ChatPageProps) {
  const [authuser, setAuthuser] = useState(null)
  useEffect(() => {
    const list = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthuser(user)
      } else {
        setAuthuser(null)
      }
    })
  }, [])


  if (!authuser) {
    redirect(`/sign-in?next=/chat/${params.id}`)
  }

  const chat = await getChat(params.id)

  if (!chat) {
    notFound()
  }

  if (chat?.userId !== authuser) {
    notFound()
  }

  return <Chat id={chat.id} initialMessages={chat.messages} />
}
