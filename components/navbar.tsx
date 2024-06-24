'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
// import { auth } from '@/auth'
import { auth } from '@/firebase/firebase'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sidebar } from '@/components/sidebar'
import { onAuthStateChanged } from 'firebase/auth'
// import { SidebarList } from '@/components/sidebar-list'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { SidebarFooter } from '@/components/sidebar-footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ClearHistory } from '@/components/clear-history'
import { UserMenu } from '@/components/user-menu'
import Menubar from '@/components/menubar'
import { cookies } from 'next/headers'

///import files for new chat
import HistoryContainer from './history-container'

export function Navbar() {
  const [authUser, setAuthuser] = React.useState(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthuser(user)
      } else {
        setAuthuser(null)
      }
    })
  }, [])

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex items-center">
        {authUser ? (
          <Sidebar />
        ) : (
          <Link href="/" target="_blank" rel="nofollow">
            <IconNextChat className="mr-2 h-6 w-6 dark:hidden" inverted />
            <IconNextChat className="mr-2 hidden h-6 w-6 dark:block" />
          </Link>
        )}
        <div className="flex items-center">
          {authUser ? (
            <UserMenu user={authUser} />
          ) : (
            <Button variant="link" asChild className="-ml-2">
              <Link href="/sign-in">Login</Link>
            </Button>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://donate.zoo.ngo"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <span className="ml-2 hidden md:flex">Donate</span>
        </a>
        <a
          href="https://zoolabs.io"
          target="_blank"
          className={cn(buttonVariants())}
        >
          <span className="hidden sm:block">Upgrade</span>
        </a>
        <HistoryContainer location="header" />
      </div>
    </header>
  )
}
