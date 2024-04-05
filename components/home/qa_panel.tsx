'use client'
import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
function QA({ title, content }: { title: string; content: string }) {
  const [flag, setFlag] = useState(false)
  return (
    <div className="flex flex-col border-b pb-4 mb-4">
      <div
        onClick={() => setFlag(!flag)}
        className="cursor-pointer flex items-center justify-between"
      >
        <p className="text-2xl max-md:text-lg">{title}</p>
        <p className="text-md">{flag ? <FaAngleUp /> : <FaAngleDown />}</p>
      </div>
      {flag && <p className="pt-2 text-[#929292] text-sm">{content}</p>}
    </div>
  )
}

export default QA
