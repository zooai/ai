"use client";
import Link from 'next/link';
import {FaTelegram, FaTwitter, FaInstagram, FaDiscord, FaYoutube, FaPlus, FaHistory, FaCogs, FaHandHoldingUsd, FaDonate} from "react-icons/fa";
import {BsMedium} from "react-icons/bs"
import Newchat from '@/components/newchat'
import History from '@/components/history'
import Setting from '@/components/setting'
import Subscription from '@/components/subscription'
import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');
function Menubar(props:any) {
    const { user } = props;
    const [flag, setFlag] = useState(0);
    const setStatus = (value:number) => {
        setFlag(value);
    }
  return (
    <div className="flex flex-col justify-between min-h-screen overflow-auto">
      <div className="flex-col">
        <h1 className="text-4xl pt-12 text-center pb-24">Blue the Beluga</h1>
        <div className='flex items-center border-y-2 py-3 px-5 border-white cursor-pointer space-x-8' onClick={() => setFlag(1)}>
            <FaPlus />
            <h2 className="text-xl">New Buddy Chat</h2>
        </div>
        <div className='flex items-center border-b-2 py-3 px-5 border-white cursor-pointer space-x-8' onClick={() => setFlag(2)}>
            <FaHistory />
            <h2 className="text-xl">Recent Buddy Chats</h2>
        </div>
        <div className='flex items-center border-b-2 py-3 px-5 border-white cursor-pointer space-x-8' onClick={() => setFlag(3)}>
            <FaCogs />
            <h2 className="text-xl">Settings</h2>
        </div>
        <div className='flex items-center border-b-2 py-3 px-5 border-white cursor-pointer space-x-8' onClick={() => setFlag(4)}>
            <FaHandHoldingUsd />
            <h2 className="text-xl">Subscription</h2>
        </div>
        <div className='flex items-center border-b-2 py-3 px-5 border-white cursor-pointer space-x-8'>
            <FaDonate />
            <h2 className="text-xl">Donate</h2>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 pb-8 text-2xl">
            <Link href="https://twitter.com/zoo_labs" legacyBehavior><FaTwitter /></Link>
            <Link href="https://t.me/zooofficial" legacyBehavior><FaTelegram /></Link>
            <Link href="https://instagram.com/zoolabs.io" legacyBehavior><FaInstagram /></Link>
            <Link href="https://discord.gg/AqrYhChx5b" legacyBehavior><FaDiscord /></Link>
            <Link href="https://zoolabsofficial.medium.com" legacyBehavior><BsMedium /></Link>
            <Link href="https://youtu.be/6yYuYtMWgOU" legacyBehavior><FaYoutube /></Link>
      </div>
      <Elements stripe={stripePromise}>
      <Newchat flag={flag} event={setStatus}/>
      <History userId={user?.id} flag={flag} event={setStatus}/>
      <Setting user={user} flag={flag} event={setStatus}/>
      
      <Subscription  user={user} flag={flag} event={setStatus} />
      </Elements>
    </div>
  )
}
export default Menubar
