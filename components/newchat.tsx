import Image from 'next/image'
import { FaAngleDown, FaAngleUp, FaArrowLeft } from 'react-icons/fa'
import React, { useState } from 'react'
import Sideslider from '@/components/slider'
function Newchat(props: any) {
  const { flag, event } = props
  const [hide, setHide] = useState(false)
  const prompts = [
    {
      id: 1,
      title: 'Virtual Companion'
    },
    {
      id: 2,
      title: 'Image Magic'
    },
    {
      id: 3,
      title: 'Personalized Pals'
    },
    {
      id: 4,
      title: 'Smart Home'
    },
    {
      id: 5,
      title: 'Eco-Travel'
    },
    {
      id: 6,
      title: 'Business Tools'
    },
    {
      id: 7,
      title: 'Wellness Support'
    },
    {
      id: 8,
      title: 'Help ?'
    },
    {
      id: 9,
      title: 'Data Security'
    },
    {
      id: 10,
      title: 'Collaborative Problem-Solving'
    },
    {
      id: 11,
      title: 'Personalized Feedback'
    },
    {
      id: 12,
      title: 'Expense Management'
    },
    {
      id: 13,
      title: 'Endangered Animals'
    },
    {
      id: 14,
      title: 'Buddy Collaboration'
    },
    {
      id: 15,
      title: 'File Conversion'
    }
  ]
  return (
    <div
      className={`absolute transition-all duration-300 ${
        flag == 1 ? 'translate-x-0' : '-translate-x-full'
      }  bg-black z-1  w-full min-h-screen overflow-auto`}
    >
      <div className="flex flex-col h-screen">
        <h1 className="absolute w-full z-10 text-3xl pt-12 h-[180px] text-center pb-12 border-b-2 border-white">
          Pick an animal to start a new AI buddy chat
        </h1>
        <div
          className="absolute top-0 left-0 z-10 cursor-pointer pl-4 pt-4"
          onClick={() => event(0)}
        >
          <FaArrowLeft />
        </div>
        <Sideslider />
        <div className="flex flex-col overflow-auto">
          <h2 className="border-b-2 py-3 px-5 border-white text-xl">
            Browser Buddies
          </h2>
          <div className="py-8 flex justify-center items-center space-x-2">
            <div className="flex flex-col space-y-2">
              <Image
                className="w-[70px] h-[70px] border rounded-full border-white"
                src="/hippo_card.png"
                width="100"
                height="100"
                alt=""
              />
              <Image
                className="w-[70px] h-[70px] border rounded-full border-white"
                src="/Orca.webp"
                width="100"
                height="100"
                alt=""
              />
              <Image
                className="w-[70px] h-[70px] border rounded-full border-white"
                src="/Otter.webp"
                width="100"
                height="100"
                alt=""
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Image
                className="w-[70px] h-[70px] border rounded-full border-white"
                src="/Turtle.webp"
                width="100"
                height="100"
                alt=""
              />
              <Image
                className="w-[70px] h-[70px] border rounded-full border-white"
                src="/Zebra.webp"
                width="100"
                height="100"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <Image
                className="w-[70px] h-[70px] border rounded-full border-white"
                src="/rhino_card.png"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center border-y-2 py-3 px-5 border-white text-xl">
            <h2 className="text-xl">Prompts</h2>
            <div className="cursor-pointer" onClick={() => setHide(!hide)}>
              {hide ? <FaAngleUp /> : <FaAngleDown />}
            </div>
          </div>

          <div
            className={`grid-cols-3 gap-4 pt-4 px-4 ${
              !hide ? 'grid' : 'hidden'
            }`}
          >
            {prompts.map((data, index) => (
              <div
                key={index}
                className="text-[0.6rem] align-middle flex items-center justify-center border border-white text-center p-1"
              >
                {data.title}
              </div>
            ))}
          </div>
          <div className="flex space-x-4 py-8 px-4 text-xs justify-between">
            <button className="border border-white px-4 py-2">
              Type Buddy Name
            </button>
            <button className="border border-white bg-white text-black px-4 py-2">
              Start Buddy Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Newchat
