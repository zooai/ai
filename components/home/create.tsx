"use client";
import Image from 'next/image'
import create1 from '../../public/create1.png'
import create2 from '../../public/create2.png'
import create3 from '../../public/create3.png'
function Create() {
    return (
      <div className='bg-black pb-32 pt-8 max-md:pb-24'>
        <p className='text-5xl font-semibold max-md:text-3xl text-center'>Create <span className='text-[#8787F7]'>Content</span> at lightning speeds.</p>
        <div className='flex max-md:flex-col lg:px-36 md:px-16 max-md:px-8 pt-32 max-md:pt-16 items-center justify-between'>
            <div className='w-1/2 mr-16 max-md:mr-0 max-md:w-5/6'>
                <Image
                    className='w-full'
                    src={create1}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
            <div className='space-y-8 w-1/2 ml-16 max-md:w-full max-md:ml-0 max-md:pt-8'>
                <p className='text-3xl xl:text-4xl max-md:text-2xl font-semibold max-md:text-center'>Jumpstart creativity and banish <span className='text-[#8787F7]'>writers block.</span></p>
                <p className='text-sm text-[#929292] max-md:text-center'>Automate First Drafts and reclaim time when you unleash productivity by letting Zoo AI craft your initial drafts and refine content.</p>
            </div>
        </div>
        <div className='flex max-md:flex-col-reverse lg:px-36 md:px-16 max-md:px-8 pt-32 max-md:pt-16 items-center justify-between'>
            <div className='space-y-8 w-1/2 mr-16 max-md:w-full max-md:mr-0 max-md:pt-8'>
                <p className='text-3xl xl:text-4xl max-md:text-2xl font-semibold max-md:text-center'>Unlimited possibilities with <span className='text-[#8787F7]'>unlimited memory.</span></p>
                <p className='text-sm text-[#929292] max-md:text-center'>Always ready to listen and transcribe so you can easily have a buddy reference the conversations, meeting or clipboard history at any time.</p>
            </div>
            <div className='w-1/2 ml-16 max-md:ml-0 max-md:w-5/6'>
                <Image
                    className='w-full'
                    src={create2}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
        </div>
        <div className='flex max-md:flex-col lg:px-36 md:px-16 max-md:px-8 pt-32 max-md:pt-16 items-center justify-between'>
            <div className='w-1/2 mr-16 max-md:mr-0 max-md:w-5/6'>
                <Image
                    className='w-full'
                    src={create3}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
            <div className='space-y-8 w-1/2 ml-16 max-md:w-full max-md:ml-0 max-md:pt-8'>
                <p className='text-3xl xl:text-4xl max-md:text-2xl font-semibold max-md:text-center'>Get the Job done with a <span className='text-[#8787F7]'>smile</span> and endearing charm.</p>
                <p className='text-sm text-[#929292] max-md:text-center'>Use the Zoo AI buddies to reduce your work by up to 40% and spend more time building and scaling.</p>
            </div>
        </div>
      </div>
    );
}

export default Create;
