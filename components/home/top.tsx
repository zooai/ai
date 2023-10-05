"use client";
import Link from 'next/link';
import dynamic from "next/dynamic";

import React,{useState} from "react";
const ModelViewer = dynamic(() => import("@/components/ModelViewer"), {
  ssr: false,
});


function Top() {
    
  return (<>
    <div className="bg-[length:100%_100%] bg-[url('../public/bg_top.png')] pt-[80px] max-md:hidden block">
      <div className='flex max-md:flex-col items-center justify-between max-md:pt-8'>
        <div className='flex flex-col w-1/2 max-md:w-full md:pl-24 lg:pl-36 xl:pl-52 max-md:px-8 md:pr-8  space-y-6'>
            <p className='text-[#8787F7] md:text-xl xl:text-2xl'>The most adorable AI interface yet.</p>
            <p className='text-white md:text-3xl xl:text-4xl'>Fast track your productivity and support the preservation of endangered animals.</p>
            <p className='text-white md:text-sm xl:text-md'>The buddies are here to help with all your tasks and can effectively collaborate with other Buddies on almost anything.</p>
        </div>
        <div className='md:w-1/2 max-md:ml-16 '>
            {/* <Image
                className='intro-bg float-right'
                src='/images/collect-elephant.png'
                width='1000'
                height='1000'
                alt=''
            /> */}
            <ModelViewer  className='float-right max-md:h-[190px] aspect-square'
              usdz='/models/Elephant/ELEPHANT_ADULT.usdz'
              glb="/models/Elephant/ELEPHANT_ADULT.glb"
            ></ModelViewer>
        </div>
      </div>
      
    </div>
    <div className="bg-black max-md:pt-20 hidden max-md:block">
      <div className='w-full px-8'>
          <h1 className='text-white text-5xl py-5'>Animals we support.</h1>
      </div>
    </div>
    </>
  );
}

export default Top;
