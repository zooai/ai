"use client";
import Link from 'next/link';
import dynamic from "next/dynamic";
import StartButton from '@/components/home/start-button'
import React,{useState} from "react";
const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
});


function Top() {
    
  return (<>
    <div className="bg-[length:100%_100%] bg-[url('../public/bg_top.png')] pt-[80px] block">
      <div className='flex max-md:flex-col-reverse items-center justify-between py-8'>
        <div className='flex flex-col items-start w-1/2 max-md:w-full md:pl-24 lg:pl-36 xl:pl-52 max-md:px-8 md:pr-8  space-y-6'>
            <p className='text-[#8787F7] font-bold md:text-lg xl:text-xl'>The most adorable AI interface yet.</p>
            <p className='text-white font-semibold md:text-3xl xl:text-4xl'>Fast track your productivity and support the preservation of endangered animals.</p>
            <p className='text-white md:text-sm xl:text-md'>The buddies are here to help with all your tasks and can effectively collaborate with other Buddies on almost anything.</p>
            <StartButton />
        </div>
        <div className='md:w-1/2 max-md:w-5/6 max-md:mb-4'>
            {/* <Image
                className='intro-bg float-right'
                src='/images/collect-elephant.png'
                width='1000'
                height='1000'
                alt=''
            /> */}
            <ModelViewer  className='float-right aspect-square'
              usdz='https://zoo.ngo/models/Elephant/ELEPHANT_ADULT.usdz'
              glb="https://zoo.ngo/models/Elephant/ELEPHANT_ADULT.glb"
            ></ModelViewer>
        </div>
      </div>
      
    </div>
    
    </>
  );
}

export default Top;
