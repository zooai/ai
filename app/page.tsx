import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { Navbar }  from '@/components/navbar'
import * as React from 'react';
// import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()
  // const router = useRouter();
  // React.useEffect(() => {
  //   if (router.isReady) {
  //     const result = router.query.result;
  //     if(result=='success'){
  //       toast.success("Thank you for donating!");
  //     }else if(result=='cancelled') {
  //       toast.warning("Donation is cancelled!!!");
  //     }
  //   }
  // }, [router]);
  return <div className='flex flex-col'>
      {/* @ts-ignore */}
      <Navbar />
      <ToastContainer />
      <Chat id={id} />
    </div>
}
