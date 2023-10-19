"use client";
import Image from 'next/image'
import step from '../../public/step.png'
function FeatureSteps({step1,content1,step2,content2,step3,content3,main_image}: {
    step1: string | undefined;
    content1: string | undefined;
    step2: string | undefined;
    content2: string | undefined;
    step3: string | undefined;
    content3: string | undefined;
    main_image: any;
  }) {
    return (
      <div className='bg-black py-32 max-md:py-24'>
        <div className='flex max-md:flex-col px-36 max-md:px-8 items-stretch justify-between gap-24'>
            <div className='w-1/2 max-md:w-full flex flex-col justify-between gap-8'>
                <p className='text-5xl font-semibold '>Three <span className='text-[#8787F7]'>easy</span> steps!</p>
                <div className='flex space-x-4 items-start'>
                    <div className="text-center bg-[length:100%_100%] bg-[url('../public/bg_mark.png')]"><p className='w-[40px] h-[40px] leading-[40px]'>1</p></div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl' dangerouslySetInnerHTML={{ __html: step1 ? step1 : '' }}></p>
                        <p className='text-sm text-[#929292]'>{content1}</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-start'>
                    <div className="text-center bg-[length:100%_100%] bg-[url('../public/bg_mark.png')]"><p className='w-[40px] h-[40px] leading-[40px]'>2</p></div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl' dangerouslySetInnerHTML={{ __html: step2 ? step2 : '' }}></p>
                        <p className='text-sm text-[#929292]'>{content2} </p>
                    </div>
                </div>
                <div className='flex space-x-4 items-start'>
                    <div className="text-center bg-[length:100%_100%] bg-[url('../public/bg_mark.png')]"><p className='w-[40px] h-[40px] leading-[40px]'>3</p></div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl' dangerouslySetInnerHTML={{ __html: step3 ? step3 : '' }}></p>
                        <p className='text-sm text-[#929292]'>{content3} </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 pl-24 max-md:w-3/4 max-md:m-auto max-md:pl-0'>
                <Image
                    className='w-full'
                    src={main_image}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
        </div>
      </div>
    );
}

export default FeatureSteps;
