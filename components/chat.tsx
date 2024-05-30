'use client'

import { useChat, type Message } from 'ai/react'

import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { EmptyScreen } from '@/components/empty-screen'
import { ChatScrollAnchor } from '@/components/chat-scroll-anchor'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { toast } from 'react-hot-toast'

const IS_PREVIEW = process.env.VERCEL_ENV === 'preview'
export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
}

export function Chat({ id, initialMessages, className }: ChatProps) {
  const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
    'ai-token',
    null
  )
  const [previewTokenDialog, setPreviewTokenDialog] = useState(IS_PREVIEW)
  const [previewTokenInput, setPreviewTokenInput] = useState(previewToken ?? '')
  const { messages, append, reload, stop, isLoading, input, setInput, setMessages} =
    useChat({
      initialMessages,
      id,
      body: {
        id,
        previewToken
      },
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText)
        }
      }
    })

  const [emotion, setEmotion] = useState('');
  const [relact, setRelact] = useState('');
  const [videoSource1, setVideoSource1] = useState<string | undefined>(undefined);
  const [videoSource2, setVideoSource2] = useState<string | undefined>(undefined);
  const [relactTime, setRelactTime] = useState(0);
  const [hidden, setHidden] = useState(true);
  
  useEffect(() => {
    if (messages.length) {
      if (messages[messages.length - 1].role === "assistant") {
        if (messages[messages.length - 1].content.split('emotion: ').length == 2) {
          setEmotion(messages[messages.length - 1].content.split('emotion: ')[1])
          messages[messages.length - 1].content = messages[messages.length - 1].content.split('emotion: ')[0]
        }
      }
      setMessages(messages)
      setRelactTime(0)
    }
  }, [messages])

  
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
    const relactInteral: NodeJS.Timer = setInterval(() => {
      setRelactTime(relactTime + 1)
      if (relactTime == 30) {
        let rand: number = Math.random()
        setRelact('relactation' + Math.floor(rand * 10) % 5)
        setRelactTime(0)
      }
    }, 1000)

    return () => clearInterval(relactInteral)
  }, [relactTime])
  
  useEffect(() => {
    getURL('/static/relactation0.mp4');
  }, [])
  
  const getURL = (name: string) => {
    // const url = await DownloadURL(reference(videoRef, name))
    const url = '/bg_video' + name;
    setVideoSource(url);
  }

  const setVideoSource = (url: string) => {
    if (hidden) {
      setVideoSource1(url);
    } else {
      setVideoSource2(url);
    }
  }

  const handleLoadedData = () => {
    setHidden(!hidden);
  }

  return (
    <div className="relative h-[calc(100vh-64px)]">
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
      {/* {hidden && <div id="fogOverlay" className={`w-full h-full object-cover absolute -z-10 ${hidden ? 'fogOverlay' : ''}`}></div>} */}
      <div
        className={cn(
          'pt-4 md:pt-10 sm:max-h-[calc(100vh-204px)] max-h-[calc(100vh-225px)] overflow-y-auto',
          className
        )}
      >
        {messages.length ? (
          <>
            <ChatList messages={messages} setMessages={setMessages}/>
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </div>
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />

      <Dialog open={previewTokenDialog} onOpenChange={setPreviewTokenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter your OpenAI Key</DialogTitle>
            <DialogDescription>
              If you have not obtained your OpenAI API key, you can do so by{' '}
              <a
                href="https://platform.openai.com/signup/"
                className="underline"
              >
                signing up
              </a>{' '}
              on the OpenAI website. This is only necessary for preview
              environments so that the open source community can test the app.
              The token will be saved to your browser&apos;s local storage under
              the name <code className="font-mono">ai-token</code>.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={previewTokenInput}
            placeholder="OpenAI API key"
            onChange={e => setPreviewTokenInput(e.target.value)}
          />
          <DialogFooter className="items-center">
            <Button
              onClick={() => {
                setPreviewToken(previewTokenInput)
                setPreviewTokenDialog(false)
              }}
            >
              Save Token
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
