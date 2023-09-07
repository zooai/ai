import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { Navbar }  from '@/components/navbar'
export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return <div className='flex flex-col'>
      {/* @ts-ignore */}
      <Navbar />
      <Chat id={id} />
    </div>
}
