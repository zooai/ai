"use client";
import Image from 'next/image'
import Link from 'next/link';
import ReviewPanel from '@/components/home/review-panel'
import {FaChevronRight} from "react-icons/fa"
import avatar1 from '../../public/avatar1.svg'
import avatar2 from '../../public/avatar2.svg'
import avatar3 from '../../public/avatar3.svg'
import avatar4 from '../../public/avatar4.svg'
import avatar5 from '../../public/avatar5.svg'
import avatar6 from '../../public/avatar6.svg'
import avatar7 from '../../public/avatar7.svg'
import avatar8 from '../../public/avatar8.svg'
import avatar9 from '../../public/avatar9.svg'
import trustpilot from '../../public/trustpilot.png'
import producthunt from '../../public/producthunt.png'
import feedback from '../../public/feedback.png'
function Review() {
    const contents = [
        {
          title: "It's an all-in-one tool",
          content: "It's an all-in-one tool, I can create text and images in int, and it helps a lot to save time, not needing more than one tool to create an article or post for...",
          company: trustpilot,
          name:'Lincoin',
          avatar: avatar1
        },
        {
            title: "Zoo AI is exceptional!",
            content: "I have tested more than two hundred AI platforms but your app is something awesome, it is an another level, really.",
            company: feedback,
            name:'RAM',
            avatar: avatar2
        },
        {
            title: "Automates, saves, and delivers!",
            content: "Zoo AI is a fantastic AI solution for companies wishing to automate procedures. Then user-friendly interface makes it simple to use, and the sophisticated algorithms are built...",
            company: producthunt,
            name:'Deldoogh',
            avatar: avatar3
        },
        {
            title: "Excellent and great development",
            content: "Excellend and great development. Kudos to the developers!",
            company: trustpilot,
            name:'Amire',
            avatar: avatar4
        },
        {
            title: "The best AI tool",
            content: "Zoo AI has revolutionized my linkedin ad writing process. With Zoo AI's automated features, I'm confident that my ads are performing at their best and ...",
            company: trustpilot,
            name:'Linnea',
            avatar: avatar5
        },
        {
            title: "Exceptional AI experience, All I need",
            content: "It was great. They have everything. I ran them through multiple AI detection checks and all passed. It's amazing.",
            company: producthunt,
            name:'Archi',
            avatar: avatar6
        },
        {
            title: "Great OpenAI & ChatGPT alternative",
            content: "Brilliant alternative to openai and chatgpt.",
            company: trustpilot,
            name:'Dean',
            avatar: avatar7
        },
        {
            title: "I just love it 10/10",
            content: "Top website which help me to earn 5900 dollar per day.",
            company: feedback,
            name:'Sandra',
            avatar: avatar8
        },
        {
            title: "Zoo AI's rephrasing and rewording",
            content: "Zoo Ai's rephrasing and rewording tool is awesome! I've only been using it for a short while, but can already tell that it is worth the money. It quickly turns old data into...",
            company: trustpilot,
            name:'AM',
            avatar: avatar9
        },
    ]
    return (
      <div className='bg-black p-32 max-md:py-24 max-md:px-8'>
        <p className='text-5xl max-md:text-3xl text-center'>Don’t Take Our Word For It</p>
        <p className='text-xl mt-4 text-center text-[#8787F7]'>Hear what our customers say and why they love us. </p>
        <div className='mt-12 grid grid-cols-3 max-md:grid-cols-1 gap-8'>
            {
                contents.map((data, index) => (
                    <ReviewPanel title={data.title} content={data.content} avatar={data.avatar} company={data.company} name={data.name}/>
                    ))
            }
        </div>
      </div>
    );
}

export default Review;
