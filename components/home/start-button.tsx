'use client'
import Link from 'next/link'
function Button() {
  return (
    <div className="flex justify-center">
      <Link href="/sign-up">
        <div className="min-w-[200px] bg-gradient-to-l from-[#8787f7] cursor-pointer rounded-xl flex items-center justify-center space-x-2 p-2">
          <span>Get Started Now</span>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.234054 12.2345L5.78648 7.008L0.234054 1.75286C-0.516719 1.06026 0.714706 -0.124343 1.46449 0.597871L7.79741 6.51699C8.06753 6.77684 8.06753 7.20959 7.79741 7.44077L1.46449 13.4174C0.713714 14.11 -0.516744 12.9263 0.234054 12.2337V12.2345Z"
              fill="white"
            />
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default Button
