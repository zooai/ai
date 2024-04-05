'use client'
import Image from 'next/image'
function ReviewPanel({
  title,
  content,
  company,
  name,
  avatar
}: {
  title: string
  content: string
  company: any
  name: string
  avatar: any
}) {
  return (
    <div className="flex flex-col p-4 rounded-xl bg-[#151C25] justify-between">
      <p>{title}</p>
      <p className="text-xs text-[#84898E] pt-3 pb-2 h-full">{content}</p>
      <div className="flex items-center justify-between">
        <Image
          className="h-full"
          src={company}
          width="118"
          height="50"
          alt=""
        />
        <div className="bg-[#212830] rounded-lg flex items-center py-2 px-4 space-x-2">
          <Image
            className="h-[25px]"
            src={avatar}
            width="25"
            height="25"
            alt=""
          />
          <span className="text-sm">{name}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewPanel
