'use client'
import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { getChat } from '@/app/actions'
import { Chat } from '@/components/chat'
import { Navbar } from '@/components/navbar'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { getDocs, where, query } from "firebase/firestore"
import { docRef, db } from '@/firebase/firebase'
import { type Chats } from '@/lib/types'
import { nanoid } from '@/lib/utils'


export const runtime = 'edge'
export const preferredRegion = 'home'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export default function ChatPage({ params }: ChatPageProps) {
  const [authuser, setAuthuser] = useState(null)
  const id: string = params.id;
  let chat: any = null
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthuser(user)
        getChatData(id)
      } else {
        setAuthuser(null)
      }
    })
  }, [])

  const getChatData = async (id: string) => {
    const q = query(docRef, where('user_id', '==', id))
    const snaps = await getDocs(q)  
    chat = snaps?.docs[0].data().payload as Chats
  }

  return  <div className="flex flex-col">
    <Navbar />
    <Chat id={chat?.id} initialMessages={chat?.messages} />
  </div>
}
