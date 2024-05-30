'use client'

import Image from 'next/image'
import { type Session } from '@supabase/auth-helpers-nextjs'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IconExternalLink } from '@/components/ui/icons'

export interface UserMenuProps {
  user: any
}

function getUserInitials(name: string) {
  const [firstName, lastName] = name.split(' ')
  return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2)
}

export function UserMenu({ user }: UserMenuProps) {
  const router = useRouter()

  console.log(user);

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log('User signed out successfully')
      })
      .catch(error => {
        // An error happened.
        console.error('Error signing out:', error)
      })
  }

  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className='px-1'>
            {user?.photoURL ? (
              <Image
                height={60}
                width={60}
                className="h-6 w-6 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300"
                src={
                  user?.photoURL
                    ? `${user.photoURL}`
                    : ''
                }
                alt={user.displayName ?? 'Avatar'}
              />
            ) : (
              <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground">
                {getUserInitials(user?.displayName ?? user?.email)}
              </div>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="start" className="w-[180px]">
          <DropdownMenuItem className="flex-col items-start">
            <div className="text-xs font-medium">
              {user?.displayName}
            </div>
            <div className="text-xs text-zinc-500">{user?.email}</div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a
              href="https://zoo.ngo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-between text-xs"
            >
              Zoo Homepage
              <IconExternalLink className="ml-auto h-3 w-3" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={signOut} className="text-xs">
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
