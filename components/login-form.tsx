'use client'
import * as React from 'react'
import { type Message } from 'ai'
import { Button } from '@/components/ui/button'
import { IconSpinner } from '@/components/ui/icons'
import { Input } from './ui/input'
import { Label } from './ui/label'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { FaGoogle, FaApple, FaFacebook, FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider
} from 'firebase/auth'
import { auth, docRef, db } from '@/firebase/firebase'
import app from '@/firebase/firebase'
import { getFirestore, doc, getDocs, setDoc, collection, query, where, addDoc} from "firebase/firestore"

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

  const signIn = async (e: any) => {
    e.preventDefault()
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      )

      const user = credentials.user

      if (user) {
        // Get the ID token
        const idToken = await user.getIdToken()

        // Set token to localStorage
        localStorage.setItem('token', idToken)
        toast.success('Signin successfully!')
        router.push('/')
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error(
          'The email address is already in use. Please use a different email address.'
        )
      } else {
        toast.error(
          'An error occurred while signing up. Please try again later.'
        )
      }
      console.log(error.message)
    }
  }

  const signUp = async (e: any) => {
    e.preventDefault()
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      )

      console.log(credentials.user)

      const user = credentials.user

      if (user) {
        // Get the ID token
        const idToken = await user.getIdToken()

        // Set token to localStorage
        localStorage.setItem('token', idToken)
        toast.success('Signup successfully!')
        router.push('/')

        // Update user profile
        await updateProfile(user, {
          displayName: `${formState.first_name} ${formState.last_name}`
        })
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error(
          'The email address is already in use. Please use a different email address.'
        )
      } else {
        toast.error(
          'An error occurred while signing up. Please try again later.'
        )
      }
      console.log(error.message)
    }
  }

  const googleSignIn = async (e: any) => {
    console.log("this is google login");
    try {
      const googleAuth = await new GoogleAuthProvider()

      const credentials = await signInWithPopup(auth, googleAuth)
      const user = credentials.user

      if (user) {
        const idToken = await user.getIdToken()
        localStorage.setItem('token', idToken)
        
        const q = query(docRef, where('user_id', '==', user.uid))
        const snaps = await getDocs(q)
        if (snaps.docs.length == 0) {
          let message: Message[] = [];
          await addDoc(docRef, {
            user_id: user.uid,
            payload: {
              id: "",
              title: "",
              createdAt: Date.now(),
              userId: user.uid,
              path: "",
              messages: message,
              sharePath: ""
            }
          })
        }
        toast.success('Signin successfully!')
        router.push('/chat/' + user.uid)
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error(
          'The email address is already in use. Please use a different email address.'
        )
      } else {
        toast.error(
          'An error occurred while signing up. Please try again later.'
        )
      }
      console.log(error.message)
    }
  }
  const facebookSignin = async (e: any) => {
    try {
      const fbAuht = await new FacebookAuthProvider()
      const credentials = await signInWithPopup(auth, fbAuht)
      const user = credentials.user

      if (user) {
        const idToken = await user.getIdToken()
        localStorage.setItem('token', idToken)
        toast.success('Signin successfully!')
        
        const q = query(docRef, where('user_id', '==', user.uid))
        const snaps = await getDocs(q)
        if (snaps.docs.length == 0) {
          let message: Message[] = [];
          await addDoc(docRef, {
            user_id: user.uid,
            payload: {
              id: "",
              title: "",
              createdAt: Date.now(),
              userId: user.uid,
              path: "",
              messages: message,
              sharePath: ""
            }
          })
        }
        router.push('/chat/' + user.uid)
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error(
          'The email address is already in use. Please use a different email address.'
        )
      } else {
        toast.error(
          'An error occurred while signing up. Please try again later.'
        )
      }
      console.log(error.message)
    }
  }

  const GithubSignin = async (e: any) => {
    try {
      const gitauth = await new GithubAuthProvider()
      const credentials = await signInWithPopup(auth, gitauth)
      const user = credentials.user

      if (user) {
        const idToken = await user.getIdToken()
        localStorage.setItem('token', idToken)
        toast.success('Signin successfully!')
        
        const q = query(docRef, where('user_id', '==', user.uid))
        const snaps = await getDocs(q)
        if (snaps.docs.length == 0) {
          let message: Message[] = [];
          await addDoc(docRef, {
            user_id: user.uid,
            payload: {
              id: "",
              title: "",
              createdAt: Date.now(),
              userId: user.uid,
              path: "",
              messages: message,
              sharePath: ""
            }
          })
        }
        router.push('/chat/' + user.uid)
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error(
          'The email address is already in use. Please use a different email address.'
        )
      } else {
        toast.error(
          'An error occurred while signing up. Please try again later.'
        )
      }
      console.log(error.message)
    }
  }
  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    if (action === 'sign-up') {
      signUp(e)
    } else {
      signIn(e)
    }
  }

  return (
    <div {...props}>
      <p className="text-3xl font-bold">
        {action == 'sign-in' ? 'SIGN IN' : 'SIGN UP'}
      </p>
      <p className="text-sm pt-3 pb-8 text-[#8a8a93]">
        Enter your email below to {action == 'sign-in' ? 'sign in' : 'sign up'}
      </p>
      <form onSubmit={handleOnSubmit}>
        <fieldset className="flex flex-col gap-y-4">
          {action == 'sign-up' ? (
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-1">
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
              </div>
            </div>
          ) : (
            ''
          )}
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
          <Button
            disabled={isLoading}
            className="hover:bg-[#8787F7] hover:text-white max-md:w-full"
          >
            {isLoading && <IconSpinner className="mr-2 animate-spin" />}
            {action === 'sign-in' ? 'Sign In' : 'Sign Up'}
          </Button>
          <p className="ml-4">
            {action === 'sign-in' ? (
              <>
                Don&apos;t have an account?{' '}
                <Link
                  href="/sign-up"
                  className="font-medium hover:text-[#8787F7]"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link
                  href="/sign-in"
                  className="font-medium hover:text-[#8787F7]"
                >
                  Sign In
                </Link>
              </>
            )}
          </p>
        </div>
      </form>
      <hr className="my-8" />
      <div className="flex items-center justify-between gap-8">
        <div
          onClick={googleSignIn}
          className="border border-[#8a8a8a] rounded-lg gap-4 flex items-center justify-center w-full py-2 cursor-pointer hover:bg-[#8787F7] "
        >
          <FaGoogle />
        </div>
        <div className="border border-[#8a8a8a] rounded-lg gap-4 flex items-center justify-center w-full py-2 cursor-pointer hover:bg-[#8787F7] ">
          <FaApple />
        </div>
        <div
          onClick={facebookSignin}
          className="border border-[#8a8a8a] rounded-lg gap-4 flex items-center justify-center w-full py-2 cursor-pointer hover:bg-[#8787F7] "
        >
          <FaFacebook />
        </div>
        <div
          onClick={GithubSignin}
          className="border border-[#8a8a8a] rounded-lg gap-4 flex items-center justify-center w-full py-2 cursor-pointer hover:bg-[#8787F7] "
        >
          <FaGithub />
        </div>
      </div>
    </div>
  )
}
