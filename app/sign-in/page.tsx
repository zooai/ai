'use client'
import { LoginForm } from '@/components/login-form'
import { redirect, useRouter } from 'next/navigation'
import Header from '@/components/header'
import { auth } from '../../firebase/firebase'
import { useState, useEffect, use } from 'react'
import dynamic from 'next/dynamic'
import { onAuthStateChanged } from 'firebase/auth'

const ModelViewer = dynamic(() => import('@/components/ModelViewer'), {
  ssr: false
})
export default function SignInPage() {
  const [authuser, setAuthuser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    const list = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthuser(user)
      } else {
        setAuthuser(null)
      }
    })
  }, [])

  // useEffect(() => {
  //   if (authuser)
  //     router.push('/')
  // }, [authuser])

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex min-h-screen max-md:flex-col">
        <div className="w-full max-md:w-3/5 max-md:mx-auto max-md:mt-[80px] max-h-screen bg-[#18181b] max-md:bg-transparent">
          <ModelViewer
            className="w-full aspect-square"
            usdz="https://zoo.ngo/models/Elephant/ELEPHANT_ADULT.usdz"
            glb="https://zoo.ngo/models/Elephant/ELEPHANT_ADULT.glb"
            disable_zoom={true}
          ></ModelViewer>
        </div>
        <div className="flex w-full  px-6 max-md:px-4 flex-col items-center justify-center py-10 max-md:py-4">
          <div className="w-full max-w-sm">
            <LoginForm action="sign-in" />
            {/* <Separator className="my-4" /> */}
            {/* <div className="flex justify-center">
              <LoginButton />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
