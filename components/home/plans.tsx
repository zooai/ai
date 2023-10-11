"use client";
import {FaStar, FaAngleRight, FaCheck} from "react-icons/fa"
import React,{useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
function Plans() {
  const plans = [
    {
      title: "Starter Plan",
      index: 0,
      price: "$9",
      sub_title: 'Start automating your life now!',
      list:[
        {value: "10,000 tokens per month"},
        {value: "Comes with one AI buddy"},
        {value: "24/7 Email support"},
        {value: "Access to all LLM models with new models added 24/7."},
        {value: "Unlimited memory, pay as you go."},
        {value: "Access to native app + IOS"},
        {value: "Food ordering, business tools, recording + transcribing, lifestyle support, and so much more!"}
      ]
    },
    {
      title: "Fam+",
      price: "$39",
      index: 1,
      sub_title: 'Everything in Starter Plan and more!',
      list:[
        {value: "24/7 LLM model updates"},
        {value: "Choose 5 animals as AI agents"},
        {value: "Comes with 3 accounts"},
        {value: "Access to all templates"},
        {value: "Access to urls and web"},
        {value: "Access to plugins/API"},
        {value: "Use AI everywhere with browser extension and Mac App"},
        {value: "Export AI Buddies training"}
      ]
    },
    {
      title: "Custom Package",
      index: 2,
      price: "Custom Pricing",
      sub_title: 'Fam+ w/ all the features and personalization.',
      list:[
        {value: "Automatic token top-up every month "},
        {value: "Exclusive AI Buddies"},
        {value: "24/7 Email support"},
        {value: "Access to all LLM models with new models added 24/7."},
        {value: "Unlimited memory, pay as you go."},
        {value: "Access to native app + IOS"},
        {value: "Food ordering, business tools, recording + transcribing, lifestyle support, and so much more!"}
      ]
    },
];
    const [plan, setPlan] = useState(plans[0]);
    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: '#8787f7',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          borderColor: '#8787f7',
          borderWidth: '1px',
          backgroundColor: '#1e2533',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));
    return (
      <div className='bg-black py-32 px-64 max-md:py-24 max-md:px-8'>
        <div className="flex space-x-32 items-start justify-between max-md:flex-col max-md:space-x-0">
            <div className="w-1/2 max-w-[380px] flex flex-col space-y-4 max-md:w-full max-md:m-auto">
                <p className="text-3xl max-md:text-center">Choose your plan</p>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-[#8787f7]">Loved by 300 000+ AI creators</p>
                    <div className="flex items-center space-x-2 text-[#8787f7]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                
                <div className={`cursor-pointer px-4 py-2 rounded-md flex items-center gap-4 justify-between ${ plan.index==0 ? 'bg-gradient-to-l from-[#1D1D57] to-[#05060C]' : 'border border-black hover:border-gray-100 '}`} onClick={()=>{setPlan(plans[0])}}>
                    <div className="flex flex-col gap-2">
                        <p className="text-md">Starter plan</p>
                        <p className={`text-xs ${ plan.index==0 ? 'text-[#8C8CD7]' : 'text-[#929292]'}`}>All our very best features in one package.</p>
                    </div>
                    <FaAngleRight />
                </div>
                <div className={`cursor-pointer px-4 py-2 rounded-md flex items-center gap-4 justify-between ${ plan.index==1 ? 'bg-gradient-to-l from-[#1D1D57] to-[#05060C]' : 'border border-black hover:border-gray-100 '}`} onClick={()=>{setPlan(plans[1])}}>
                    <div className="flex flex-col gap-2">
                        <p className="text-md">Fam+</p>
                        <p className={`text-xs ${ plan.index==1 ? 'text-[#8C8CD7]' : 'text-[#929292]'}`}>For the curious who wants to get started with AI.</p>
                    </div>
                    <FaAngleRight />
                </div>
                <div className={`cursor-pointer px-4 py-2 rounded-md flex items-center gap-4 justify-between ${ plan.index==2 ? 'bg-gradient-to-l from-[#1D1D57] to-[#05060C]' : 'border border-black hover:border-gray-100'}`} onClick={()=>{setPlan(plans[2])}}>
                    <div className="flex flex-col gap-2">
                        <p className="text-md">Custom Package</p>
                        <p className={`text-xs ${ plan.index==2 ? 'text-[#8C8CD7]' : 'text-[#929292]'}`}>Buy individual word and image credits.</p>
                    </div>
                    <FaAngleRight />
                </div>
            </div>
            <div className="w-1/2 flex flex-col space-y-4 items-center max-md:w-full max-md:pt-16">
                <div className="flex justify-center items-center space-x-2">
                    <p className="text-[#8787f7]">Monthly</p>
                    <IOSSwitch />
                    <p className="text-[#8787f7]">Yearly</p>
                    <div className="bg-[#13153b] text-[#8787f7] px-4 py-2 rounded-lg">3 Months Free</div>
                </div>
                <div className="flex flex-col w-full max-w-[400px] rounded-xl bg-[#252525] p-4 drop-shadow-[0_3px_8px_rgba(135,135,245,0.9)]">
                  <div className="rounded-xl flex flex-col px-8 py-4 items-center">
                    <p className="text-2xl text-[#8787F7]">{plan.title}</p>
                    <p className="text-5xl mt-4 text-center">{plan.price}</p>
                    <p className="text-xl mt-4 text-center">{plan.sub_title}</p>
                  </div>
                  <div className="flex flex-col pt-2 pb-8 space-y-4">
                  {
                      plan.list.map((data, index) => (
                        <div className="flex gap-3 items-center justify-between">
                          <FaCheck className="w-[16px] h-[16px]"/>
                          <span className="w-full">{data.value}</span>
                        </div>
                      ))
                  }
                  </div>
                  <div className="my-4 w-full bg-gradient-to-l from-[#8787F7] to-[#252534] rounded-lg py-2 cursor-pointer flex space-x-2 items-center justify-center"><span>Sign up. It’s free.</span> <FaAngleRight /></div>
                </div>
                <p className="text-center text-xs pt-4">Secure payments powered by Stripe. Cancel at any time.<br />*Plans with unlimited memory and tokens are subject to our <span className="text-[#8787f7]">Fair Use Policy.</span></p>
            </div>
        </div>
      </div>
    );
}

export default Plans;
