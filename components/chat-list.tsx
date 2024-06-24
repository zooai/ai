import { type Message } from 'ai'
import { type UseChatHelpers } from 'ai/react'

import { Separator } from '@/components/ui/separator'
import { ChatMessages } from '@/components/chat-messages'

import { useEffect, useState } from 'react'

export interface ChatList extends Pick<
  UseChatHelpers,
  | 'setMessages'
  >{
    messages: Message[]
}

export function ChatList({ messages, setMessages }: ChatList) {
  if (!messages.length) {
    return null
  } else {
    messages.map((message, index) => {
      if (message.role === 'assistant') {
        try{
          message.content = JSON.parse(message.content).answer
        } catch {

        }
      }
    })
    setMessages(messages);
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && (
            <Separator className="my-4 md:my-8" />
          )}
        </div>
      ))}
    </div>
  )
}
