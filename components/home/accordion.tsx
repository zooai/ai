'use client'
import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
function Accordion({ title, content }: { title: string; content: string }) {
  const [flag, setFlag] = useState(false)
  return (
    <div className="flex flex-col border-b pb-4 mb-4">
      <div
        onClick={() => setFlag(!flag)}
        className="cursor-pointer flex items-center justify-between"
      >
        <p className="text-2xl">{title}</p>
        <p className="text-md">{flag ? <FaTimes /> : <FaPlus />}</p>
      </div>
      {flag && <p className="pt-2 text-[#929292] text-sm">{content}</p>}
    </div>
  )
}

export default Accordion
