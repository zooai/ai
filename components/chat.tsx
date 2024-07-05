'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChatPanel } from './chat-panel'
import { ChatMessages } from './chat-messages'
import { useUIState, useAIState } from 'ai/rsc'

type ChatProps = {
  id?: string
}

export function Chat({ id }: ChatProps) {
  const router = useRouter()
  const path = usePathname()
  const [messages] = useUIState()
  const [aiState] = useAIState()
  //for control videos
  const [hidden, setHidden] = useState(true);
  const [relactTime, setRelactTime] = useState(0);
  const [emotion, setEmotion] = useState('');
  const [relact, setRelact] = useState('');

  const handleLoadedData = () => {
    setHidden(!hidden);
  }
  const [videoSource1, setVideoSource1] = useState<string | undefined>(undefined);
  const [videoSource2, setVideoSource2] = useState<string | undefined>(undefined);

  const setVideoSource = (url: string) => {
    if (hidden) {
      setVideoSource1(url);
    } else {
      setVideoSource2(url);
    }
  }
  const getURL = (name: string) => {
    const url = '/bg_video' + name;
    setVideoSource(url);
  }

  useEffect(() => {
    const relactInteral: NodeJS.Timeout = setInterval(() => {
      setRelactTime(relactTime + 1)
      if (relactTime > 10) {
        let rand: number = Math.random()
        setRelact('relactation' + Math.floor(rand * 10) % 5)
        setRelactTime(0)
      }
    }, 1000)

    return () => clearInterval(relactInteral)
  }, [relactTime])

  useEffect(() => {
    if (messages.length) {
      if (messages[messages.length - 1].role === "assistant") {
        if (messages[messages.length - 1].content.split('emotion: ').length == 2) {
          setEmotion(messages[messages.length - 1].content.split('emotion: ')[1])
          messages[messages.length - 1].content = messages[messages.length - 1].content.split('emotion: ')[0]
        }
      }
      setRelactTime(0)
    }
  }, [messages])
  
  useEffect(() => {
    getURL('/static/relactation0.mp4');
  }, [])
  console.log('message : ', messages )
  console.log('emotion : ', emotion )
  useEffect(() => {
    if (emotion !== '') {
      const source = '/emotion/' + emotion + '.mp4'
      getURL(source)
    }
  }, [emotion])

  useEffect(() => {
    if (relact !== '') {
      const source = '/static/' + relact + '.mp4'
      getURL(source)
    }
  }, [relact])


  useEffect(() => {
    if (!path.includes('search') && messages.length === 1) {
      window.history.replaceState({}, '', `/search/${id}`)
    }
  }, [id, path, messages])

  useEffect(() => {
    if (aiState.messages[aiState.messages.length - 1]?.type === 'followup') {
      // Refresh the page to chat history updates
      router.refresh()
    }
  }, [aiState, router])
  return (
    <>
      <video
        autoPlay
        loop
        muted
        onLoadedData={handleLoadedData}
        className={`w-full h-full object-cover absolute -z-10 ${hidden ? 'fogOverlay2' : 'fogOverlay1'}`}
        src={videoSource1}
      />
      <video
        autoPlay
        loop
        muted
        onLoadedData={handleLoadedData}
        className={`w-full h-full object-cover absolute -z-10 ${hidden ? 'fogOverlay1' : 'fogOverlay2'}`}
        src={videoSource2}
      />
      <div className=' h-screen overflow-auto'>
        <div className="px-8 sm:px-12 pt-12 md:pt-14 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4">
          <ChatMessages messages={messages} />
          <ChatPanel messages={messages} />
        </div>
      </div>
    </>

  )
}