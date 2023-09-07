"use client";
import * as React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { clearChats } from '@/app/actions'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sidebar } from '@/components/sidebar'
// import { SidebarList } from '@/components/sidebar-list'
import {
  IconGitHub,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { SidebarFooter } from '@/components/sidebar-footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { ClearHistory } from '@/components/clear-history'
import { UserMenu } from '@/components/user-menu'
// import { cookies } from 'next/headers'
import Image from 'next/image'
import iconImage from '../public/zooLogo.svg'
function Header() {
  // const cookieStore = cookies()
  // const session = await auth({ cookieStore })
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex items-center">
        {/* {session?.user ? (
          <Sidebar>
            <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
              {/* @ts-ignore 
              <SidebarList userId={session?.user?.id} />
            </React.Suspense>
            <SidebarFooter>
              <ThemeToggle />
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </Sidebar>
        ) : ( */}
          <Link href="/" target="_blank" rel="nofollow">
            {/* <IconNextChat className="mr-2 h-6 w-6 dark:hidden" inverted /> */}
            {/* <IconZoo className="mr-2 hidden h-6 w-6 dark:block" /> */}
            <Image alt="ZOO" src={iconImage} width='64' height='64' />
          </Link>
        {/* )} */}
        {/* <div className="flex items-center">
          <IconSeparator className="h-6 w-6 text-muted-foreground/50" />
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <Button variant="link" asChild className="-ml-2">
              <Link href="/sign-in">Login</Link>
            </Button>
          )}
        </div> */}
      </div>
      <div className="md:hidden">
        <button
        type="button"
        onClick={toggleMenu}
        className="text-white inline-flex items-center justify-center p-2 "
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19 17.5H1V16H19V17.5ZM13 10.5H1V9H13V10.5ZM1 3.5V2H19V3.5H1Z" fill="white"/>
              </svg>
          ) : (
              <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
              />
              </svg>
          )}
        </button>
      </div>
      <div className="flex items-center justify-end space-x-2 md:block hidden">
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
      </div>
    </header>
  )
}
export default Header
