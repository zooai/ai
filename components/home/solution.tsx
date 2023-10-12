"use client";
import Image from 'next/image'
import solution1 from '../../public/solution1.png'
import solution2 from '../../public/solution2.png'
import solution3 from '../../public/solution3.png'
import solution4 from '../../public/solution4.png'
import solution5 from '../../public/solution5.png'
import solution6 from '../../public/solution6.png'
import gpt4 from '../../public/gpt4.png'
function Solution() {
    return (
      <div className='bg-black py-32 max-md:py-24'>
        <p className='text-5xl text-center  max-md:text-3xl px-24 max-md:px-8'>Your <span className='text-[#8787F7]'>all-in-one</span> solution for next-level <span className='text-[#8787F7]'>Generative AI.</span></p>
        <div className='flex max-md:flex-col-reverse px-36 max-md:px-8 pt-32 max-md:pt-16 items-start justify-between'>
            <div className='space-y-4 w-1/2 max-md:w-full max-md:z-10 mr-16 max-md:mr-0 max-md:pt-8 flex flex-col justify-between items-center max-md:bg-gradient-to-b from-[#00000000] via-[#0000007f] to-[#000000]'>
                <div className='w-[1px] h-[150px] max-md:h-[80px] bg-[#929292]'></div>
                <div className='flex flex-col justify-center items-center space-y-4 py-8'>
                    <p className='text-4xl'>Train and Explain</p>
                    <p className='text-sm text-[#929292] text-center px-16'>Instead of spending hours analyzing and comparing the thousands of available language models we optimize to choose them for you at the most competitive prices OR specify which models to reference. </p>
                </div>
                <div className='w-[1px] h-[600px] max-md:h-[200px] bg-[#929292]'></div>
            </div>
            <div className='sticky top-0 flex flex-col gap-12 max-md:gap-6 w-1/2 ml-16 max-md:w-full max-md:px-16 max-md:ml-0'>
                <div className='flex justify-between gap-12 max-md:gap-0'>
                    <Image
                        className='w-1/3 max-md:w-1/4'
                        src={solution1}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                    <Image
                        className='w-1/3 max-md:w-1/4'
                        src={solution2}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                    <Image
                        className='w-1/3 max-md:w-1/4'
                        src={solution3}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                </div>
                <div className='flex justify-between gap-12 max-md:gap-0'>
                    <Image
                        className='w-1/3 max-md:w-1/4'
                        src={solution4}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                    <Image
                        className='w-1/3 max-md:w-1/4'
                        src={solution5}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                    <Image
                        className='w-1/3 max-md:w-1/4'
                        src={solution6}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                </div>
            </div>
        </div>
        <div className='flex max-md:flex-col px-36 max-md:px-8 pt-36 max-md:pt-16 items-start justify-between'>
            <div className='sticky top-0 w-1/2 pr-24 max-md:w-full max-md:px-16'>
                <Image
                    className='w-full'
                    src={gpt4}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
            <div className='space-y-4 w-1/2 max-md:w-full max-md:z-10 max-md:pt-8 flex flex-col justify-between items-center max-md:bg-gradient-to-b from-[#00000000] via-[#0000007f] to-[#000000]'>
                <div className='w-[1px] h-[150px] max-md:h-[80px] bg-[#929292]'></div>
                <div className='flex flex-col justify-center items-center space-y-4 py-8 px-12 max-md:px-0'>
                    <p className='text-4xl text-center px-16'>One subscription to manage all your tasks.</p>
                    <p className='text-sm text-[#929292] text-center px-16'>We use the best AI models to make the most effective and adorable buddies. Plus we are always on the lookout for the latest and greatest integrations and are constantly updating and improving our technology.  </p>
                </div>
                <div className='w-[1px] h-[1000px] max-md:h-[500px] bg-[#929292]'></div>
            </div>
        </div>
        
      </div>
    );
}

export default Solution;
