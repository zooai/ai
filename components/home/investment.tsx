"use client";
import React,{useState} from "react";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import money_icon from '../../public/money_icon.png'
import { FaAngleRight } from 'react-icons/fa'
import Image from 'next/image'
function Investment() {
  const [hour ,setHour] = useState(20);
  const [rate ,setRate] = useState(50);
  const CustomSlider = styled(Slider)({
      color: '#2929EB',
      height: 8,
      '& .MuiSlider-track': {
        border: 'none',
      },
      '& .MuiSlider-thumb': {
        height: 15,
        width: 15,
        backgroundColor: '#fff',
        borderRadius: 2,
        border: '2px solid #fff',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit',
        },
        '&:before': {
          display: 'none',
        },
      },
      '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#333',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
          transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
          transform: 'rotate(45deg)',
        },
      },
    });
  const handleHourChange = (event: Event, newValue: number | number[]) => {
      if (typeof newValue === 'number') {
        setHour(newValue);
      }
    };
    return (
      <div className='bg-black py-32 px-64 max-md:py-24 max-md:px-8'>
        <div className="flex max-md:flex-col items-center justify-between">
            <div className="w-2/5 max-md:w-full flex flex-col gap-4 pr-16 max-md:px-16 max-sm:px-8">
                <p className='text-xs text-[#8d8d8e]'>Hours lost per week on distractions, context-switching, manual writing work, and automating repetitive tasks.</p>
                <p className='text-lg'>{hour} Hours / week</p>
                <CustomSlider valueLabelDisplay="auto" aria-label="sense slider" value={hour} step={1} onChange={handleHourChange} min={1} max={20} />
                <div className="px-1 flex justify-between -mt-6">
                    <p className="text-[0.5rem]">1</p>
                    <p className="text-[0.5rem]">20</p>
                </div>
                <p className='text-xs'>How much is 1 hour of your time worth to you?</p>
                <div className='bg-[#10141B] rounded-lg p-2 gap-1 flex items-center justify-between'>
                    <span className='text-xs text-[#8d8d8e]'>$</span>
                    <input type='number' value={rate} className='w-full outline-none bg-transparent' />
                    <span className='text-xs text-[#8d8d8e]'>/hr</span>
                </div>
            </div>
            <div className="w-3/5 max-md:w-full flex flex-col items-center border-l pl-16 max-md:border-none max-md:px-16 max-md:pt-16 max-sm:px-8">
                <div className='text-3xl max-md:text-center'><span className='text-[#8787f7]'>Return</span> on investment</div>
                <div className='text-sm'>Per month with ZOO AI</div>
                <div className='text-5xl pt-5 flex items-center justify-center'>
                  <span>$</span>
                  <Image
                        className='h-[50px]'
                        src={money_icon}
                        width='50'
                        height='50'
                        alt=''
                    />
                </div>
                <div className='text-sm'>Or 80 hours of your life</div>
                <div className='w-full mt-5 bg-[#8787f7] text-white py-2 rounded-lg flex items-center justify-center gap-4'>Get Started Now <FaAngleRight /></div>
                <hr className='w-full my-5'/>
                <div className='w-full text-sm'>How did we get this number?</div>
                <div className='flex justify-between items-center w-full pt-2'>
                  <span className='text-[#9a9a9b] text-xs'>Hours lost per month</span>
                  <span className='text-white text-xs'>80 hours</span>
                </div>
                <div className='flex justify-between items-center w-full pt-2'>
                  <span className='text-[#9a9a9b] text-xs'>Value of ZOO AI for saving 8 hours of your time </span>
                  <span className='text-white text-xs'>$4000</span>
                </div>
                <div className='flex justify-between items-center w-full pt-2'>
                  <span className='text-[#9a9a9b] text-xs'>Cost of ZOO AI PRO subscription per month</span>
                  <span className='text-white text-xs'>$49</span>
                </div>
                <hr className='w-full my-5'/>
                <div className='flex justify-between items-center w-full'>
                  <span className='text-white text-sm'>Total TOI per month</span>
                  <span className='text-white text-xs'>$3951</span>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Investment;
