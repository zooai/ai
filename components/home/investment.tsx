"use client";
import React,{useState} from "react";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import money_icon from '../../public/money_icon.png'
import { FaAngleRight } from 'react-icons/fa'
import Image from 'next/image'
import { Range } from 'react-range';
function Investment() {
  const [hour ,setHour] = useState({ values: [20] });
  const [rate ,setRate] = useState(50);
  
   const handleInputChange = (event: any) => {
      setRate(event.target.value);
    };
    return (
      <div className='bg-black py-32 px-64 max-md:py-12 max-md:px-8'>
        <div className="flex max-md:flex-col items-center justify-between">
            <div className="w-2/5 max-md:w-full flex flex-col gap-4 pr-16 max-md:px-16 max-sm:px-8">
                <p className='text-xs text-[#8d8d8e]'>Hours lost per week on distractions, context-switching, manual writing work, and automating repetitive tasks.</p>
                <p className='text-lg'>{hour.values[0]} Hours / week</p>
                {/* <CustomSlider valueLabelDisplay="auto" aria-label="sense slider" value={hour} step={1} onChange={handleHourChange} min={1} max={20} /> */}
                <Range
                  step={1}
                  min={1}
                  max={20}
                  values={hour.values}
                  onChange={(values) => setHour({values})}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '8px',
                        width: '100%',
                        backgroundColor: '#2929EB',
                        borderRadius:4
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: '15px',
                        width: '15px',
                        backgroundColor: '#fff',
                        borderRadius: 2,
                        border: '2px solid #fff',
                      }}
                    />
                  )}
                />
                <div className="px-1 flex justify-between -mt-3">
                    <p className="text-[0.5rem]">1</p>
                    <p className="text-[0.5rem]">20</p>
                </div>
                <p className='text-xs'>How much is 1 hour of your time worth to you?</p>
                <div className='bg-[#10141B] rounded-lg p-2 gap-1 flex items-center justify-between'>
                    <span className='text-xs text-[#8d8d8e]'>$</span>
                    <input type='number' value={rate} onChange={handleInputChange} className='w-full outline-none bg-transparent' />
                    <span className='text-xs text-[#8d8d8e]'>/hr</span>
                </div>
            </div>
            <div className="w-3/5 max-md:w-full flex flex-col items-center border-l pl-16 max-md:border-none max-md:px-16 max-md:pt-16 max-sm:px-8">
                <div className='text-3xl max-md:text-center font-semibold '><span className='text-[#8787f7]'>Return</span> on investment</div>
                <div className='text-sm'>Per month with ZOO AI</div>
                <div className='text-5xl pt-5 flex items-center justify-center'>
                  <span className="font-semibold">${hour.values[0] * 4 * rate - 49}</span>
                  <Image
                        className='h-[50px]'
                        src={money_icon}
                        width='50'
                        height='50'
                        alt=''
                    />
                </div>
                <div className='text-sm'>Or {hour.values[0] * 4} hours of your life</div>
                <div className='w-full mt-5 bg-[#8787f7] text-white py-2 rounded-lg flex items-center justify-center gap-4'>Get Started Now <FaAngleRight /></div>
                <hr className='w-full my-5'/>
                <div className='w-full text-sm'>How did we get this number?</div>
                <div className='flex justify-between items-center w-full pt-2'>
                  <span className='text-[#9a9a9b] text-xs'>Hours lost per month</span>
                  <span className='text-white text-xs'>{hour.values[0] * 4} hours</span>
                </div>
                <div className='flex justify-between items-center w-full pt-2'>
                  <span className='text-[#9a9a9b] text-xs'>Value of ZOO AI for saving {hour.values[0] * 4} hours of your time </span>
                  <span className='text-white text-xs'>${hour.values[0] * 4 * rate}</span>
                </div>
                <div className='flex justify-between items-center w-full pt-2'>
                  <span className='text-[#9a9a9b] text-xs'>Cost of ZOO AI PRO subscription per month</span>
                  <span className='text-white text-xs'>$49</span>
                </div>
                <hr className='w-full my-5'/>
                <div className='flex justify-between items-center w-full'>
                  <span className='text-white text-sm'>Total TOI per month</span>
                  <span className='text-white text-xs'>${hour.values[0] * 4 * rate - 49}</span>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Investment;
