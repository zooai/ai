"use client";
import {FaStar, FaAngleRight, FaCheck} from "react-icons/fa"
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
function Plans() {
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
      <div className='bg-black py-32 px-64'>
        <div className="flex space-x-32 items-start justify-between">
            <div className="w-1/2 max-w-[380px] flex flex-col space-y-4">
                <p className="text-3xl">Choose your plan</p>
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
                <div className='button-gradient px-4 py-2 rounded-md flex flex-col gap-2'>
                    <p className="text-md">Pro plan</p>
                    <p className="text-xs text-[#929292]">All our very best features in one package.</p>
                </div>
                <div className='border border-black hover:border-gray-100 cursor-pointer px-4 py-2 rounded-md flex items-center gap-4 justify-between'>
                    <div className="flex flex-col gap-2">
                        <p className="text-md">Starter plan</p>
                        <p className="text-xs text-[#929292]">For the curious who wants to get started with AI.</p>
                    </div>
                    <FaAngleRight />
                </div>
                <div className='border border-black hover:border-gray-100 cursor-pointer px-4 py-2 rounded-md flex items-center gap-4 justify-between'>
                    <div className="flex flex-col gap-2">
                        <p className="text-md">Word credits</p>
                        <p className="text-xs text-[#929292]">Buy individual word and image credits.</p>
                    </div>
                    <FaAngleRight />
                </div>
            </div>
            <div className="w-1/2 flex flex-col space-y-4 items-center">
                <div className="flex justify-center items-center space-x-2">
                    <p className="text-[#8787f7]">Monthly</p>
                    <IOSSwitch />
                    <p className="text-[#8787f7]">Yearly</p>
                    <div className="bg-[#13153b] text-[#8787f7] px-4 py-2 rounded-lg">3 Months Free</div>
                </div>
                <div className="flex flex-col w-full max-w-[400px] rounded-xl bg-[#151c25]">
                  <div className="rounded-xl flex flex-col p-8 bg-gradient">
                    <p className="text-4xl">Pro</p>
                    <p className="text-4xl mt-2">$49<span className="text-lg text-[#929292]">/month</span></p>
                    <div className="w-full mt-8 bg-[#11161e] rounded-lg py-2 cursor-pointer flex space-x-2 items-center justify-center"><span>Upgrade</span> <FaAngleRight /></div>
                  </div>
                  <div className="flex flex-col py-8 space-y-4 px-8">
                    <p className="">Everything in starter, plus:</p>
                    <div className="flex space-x-2 items-center">
                      <FaCheck />
                      <span>Acces to all LLM models, listed here</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <FaCheck />
                      <span>$10 Credit per friend sign up</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <FaCheck />
                      <span>Unlimited Memory</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <FaCheck />
                      <span>Unlimited Animal Buddies</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <FaCheck />
                      <span>Unlimited Conversations</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <FaCheck />
                      <span>Unlimited GPT-4</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <FaCheck />
                      <span>Unlimited Edits</span>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <FaCheck />
                      <span>Unlimited Chat Shares</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-xs pt-4">Secure payments powered by Stripe. Cancel at any time.<br />*Plans with unlimited memory and tokens are subject to our <span className="text-[#8787f7]">Fair Use Policy.</span></p>
            </div>
        </div>
      </div>
    );
}

export default Plans;
