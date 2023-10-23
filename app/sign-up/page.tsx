import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { LoginForm } from '@/components/login-form'
import { Separator } from '@/components/ui/separator'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Header  from '@/components/header'
import dynamic from "next/dynamic";
const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
});
export default async function SignInPage() {
  const cookieStore = cookies()
  const session = await auth({ cookieStore })
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex min-h-screen max-md:flex-col'>
        <div className='w-full max-md:w-3/5 max-md:mx-auto max-md:mt-[80px] max-h-screen bg-[#18181b] max-md:bg-transparent'>
          <ModelViewer  className='w-full aspect-square'
              usdz='https://zoo.ngo/models/Elephant/ELEPHANT_ADULT.usdz'
              glb="https://zoo.ngo/models/Elephant/ELEPHANT_ADULT.glb"
              disable_zoom={true}
            ></ModelViewer>
        </div>
        <div className="flex w-full max-md:h-[calc(100vh - 80px)] px-6 max-md:px-4 flex-col items-center justify-center py-10 max-md:py-4">
          <div className="w-full max-w-sm">
            <LoginForm action="sign-up" />
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
