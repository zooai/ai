"use client";
import Image from 'next/image'
import Link from 'next/link';
import ReviewPanel from '@/components/home/review-panel'
import {FaChevronRight} from "react-icons/fa"
function Review() {
    const contents = [
        {
          title: "It's an all-in-one tool",
          content: "It's an all-in-one tool, I can create text and images in int, and it helps a lot to save time, not needing more than one tool to create an article or post for...",
          company: 'trustpilot.PNG',
          name:'Lincoin',
          avatar: 'avatar1.svg'
        },
        {
            title: "Zoo AI is exceptional!",
            content: "I have tested more than two hundred AI platforms but your app is something awesome, it is an another level, really.",
            company: 'feedback.PNG',
            name:'RAM',
            avatar: 'avatar2.svg'
        },
        {
            title: "Automates, saves, and delivers!",
            content: "Zoo AI is a fantastic AI solution for companies wishing to automate procedures. Then user-friendly interface makes it simple to use, and the sophisticated algorithms are built...",
            company: 'producthunt.PNG',
            name:'Deldoogh',
            avatar: 'avatar3.svg'
        },
        {
            title: "Excellent and great development",
            content: "Excellend and great development. Kudos to the developers!",
            company: 'trustpilot.PNG',
            name:'Amire',
            avatar: 'avatar4.svg'
        },
        {
            title: "The best AI tool",
            content: "Zoo AI has revolutionized my linkedin ad writing process. With Zoo AI's automated features, I'm confident that my ads are performing at their best and ...",
            company: 'trustpilot.PNG',
            name:'Linnea',
            avatar: 'avatar5.svg'
        },
        {
            title: "Exceptional AI experience, All I need",
            content: "It was great. They have everything. I ran them through multiple AI detection checks and all passed. It's amazing.",
            company: 'producthunt.PNG',
            name:'Archi',
            avatar: 'avatar6.svg'
        },
        {
            title: "Great OpenAI & ChatGPT alternative",
            content: "Brilliant alternative to openai and chatgpt.",
            company: 'trustpilot.PNG',
            name:'Dean',
            avatar: 'avatar7.svg'
        },
        {
            title: "I just love it 10/10",
            content: "Top website which help me to earn 5900 dollar per day.",
            company: 'feedback.PNG',
            name:'Sandra',
            avatar: 'avatar8.svg'
        },
        {
            title: "Zoo AI's rephrasing and rewording",
            content: "Zoo Ai's rephrasing and rewording tool is awesome! I've only been using it for a short while, but can already tell that it is worth the money. It quickly turns old data into...",
            company: 'trustpilot.PNG',
            name:'AM',
            avatar: 'avatar9.svg'
        },
    ]
    return (
      <div className='bg-black p-32'>
        <p className='text-5xl text-center'>Don’t Take Our Word For It</p>
        <p className='text-xl mt-4 text-center text-[#8787F7]'>Hear what our customers say and why they love us. </p>
        <div className='mt-12 grid grid-cols-3 gap-8'>
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
