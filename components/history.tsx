import { FaArrowLeft } from 'react-icons/fa'
import * as React from 'react'
import { clearChats } from '@/app/actions'
import { ThemeToggle } from '@/components/theme-toggle'
import { ClearHistory } from '@/components/clear-history'
import { SidebarList } from '@/components/sidebar-list'
function History(props: any) {
  const { userId, flag, event } = props
  return (
    <div
      className={`absolute transition-all duration-300 ${
        flag == 2 ? 'translate-x-0' : '-translate-x-full'
      }  bg-black z-1  w-full min-h-screen overflow-auto`}
    >
      <div className="flex flex-col h-screen">
        <div className="cursor-pointer pl-4 pt-4" onClick={() => event(0)}>
          <FaArrowLeft />
        </div>
        <div className="pt-8 flex space-x-4 items-center justify-between px-4">
          <h2 className="text-md">History</h2>
          <ClearHistory clearChats={clearChats} />
        </div>

        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          {/* @ts-ignore */}
          <SidebarList userId={userId} />
        </React.Suspense>
      </div>
    </div>
  )
}
export default History
