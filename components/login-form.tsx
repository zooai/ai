'use client'

import * as React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { Button } from '@/components/ui/button'
import { IconSpinner } from '@/components/ui/icons'
import { Input } from './ui/input'
import { Label } from './ui/label'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import {FaGoogle, FaApple} from "react-icons/fa"
import { useRouter } from 'next/navigation'

interface LoginFormProps extends React.ComponentPropsWithoutRef<'div'> {
  action: 'sign-in' | 'sign-up'
}

export function LoginForm({
  className,
  action = 'sign-in',
  ...props
}: LoginFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()
  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  const [formState, setFormState] = React.useState<{
    first_name: string
    last_name: string
    email: string
    password: string
  }>({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const signIn = async () => {
    const { first_name, last_name, email, password } = formState
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return error
  }

  const signUp = async () => {
    const { first_name, last_name, email, password } = formState
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/api/auth/callback` }
    })

    if (!error && !data.session) {
      toast.success('Check your inbox to confirm your email address!')
      console.log("create the user")
      const {data, error} = await supabase
      .from('users')
      .insert([{ email:email, first_name: first_name, last_name: last_name }]).select()
      console.log(error)
    }
    return error
  }
  const googleSignIn = async () => {
    const { error, data } = await supabase.auth.signInWithOAuth({
     provider: "google",
     options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
    })
    console.log(error)
    console.log(data)
    return error
  }
  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    setIsLoading(true)

    const error = action === 'sign-in' ? await signIn() : await signUp()

    if (error) {
      setIsLoading(false)
      toast.error(error.message)
      return
    }

    setIsLoading(false)
    router.refresh()
  }

  return (
    <div {...props}>
      <p className='text-3xl font-bold'>{action == 'sign-in' ? 'SIGN IN' : 'SIGN UP'}</p>
      <p className='text-sm pt-3 pb-8 text-[#8a8a93]'>Enter your email below to {action=='sign-in' ? 'sign in' : 'sign up'}</p>
      <form onSubmit={handleOnSubmit}>
        <fieldset className="flex flex-col gap-y-4">
          {
            action == 'sign-up' ? <div className='flex flex-col gap-y-4'><div className="flex flex-col gap-y-1">
            <Label>First Name</Label>
            <Input
              name="first_name"
              type="text"
              value={formState.first_name}
              onChange={e =>
                setFormState(prev => ({
                  ...prev,
                  first_name: e.target.value
                }))
              }
            />
          </div>
          <div className="flex flex-col gap-y-1">
          <Label>Last Name</Label>
          <Input
            name="last_name"
            type="text"
            value={formState.last_name}
            onChange={e =>
              setFormState(prev => ({
                ...prev,
                last_name: e.target.value
              }))
            }
          />
        </div></div> : ''
          }
          <div className="flex flex-col gap-y-1">
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={formState.email}
              onChange={e =>
                setFormState(prev => ({
                  ...prev,
                  email: e.target.value
                }))
              }
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              value={formState.password}
              onChange={e =>
                setFormState(prev => ({
                  ...prev,
                  password: e.target.value
                }))
              }
            />
          </div>
        </fieldset>

        <div className="mt-4 flex items-center max-md:flex-col max-md:gap-4">
          <Button disabled={isLoading} className='hover:bg-[#8787F7] hover:text-white max-md:w-full'>
            {isLoading && <IconSpinner className="mr-2 animate-spin" />}
            {action === 'sign-in' ? 'Sign In' : 'Sign Up'}
          </Button>
          <p className="ml-4">
            {action === 'sign-in' ? (
              <>
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" className="font-medium hover:text-[#8787F7]">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link href="/sign-in" className="font-medium hover:text-[#8787F7]">
                  Sign In
                </Link>
              </>
            )}
          </p>
        </div>
      </form>
      <hr className='my-8'/>
      <div className='flex items-center justify-between gap-8'>
        <div onClick={googleSignIn} className='border border-[#8a8a8a] rounded-lg gap-4 flex items-center justify-center w-full py-2 cursor-pointer hover:bg-[#8787F7] '>
              <FaGoogle />
              <span>Google</span>
        </div>
        <div className='border border-[#8a8a8a] rounded-lg gap-4 flex items-center justify-center w-full py-2 cursor-pointer hover:bg-[#8787F7] '>
              <FaApple />
              <span>Apple</span>
        </div>
      </div>
    </div>
  )
}
