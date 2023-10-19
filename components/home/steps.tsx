"use client";
import Image from 'next/image'
import step from '../../public/step.png'
function Steps() {
    return (
      <div className='bg-black py-32 max-md:py-24'>
        <div className='flex max-md:flex-col px-36 max-md:px-8 items-stretch justify-between gap-24'>
            <div className='w-1/2 max-md:w-full flex flex-col justify-between gap-8'>
                <p className='text-5xl font-semibold '>Three <span className='text-[#8787F7]'>easy</span> steps!</p>
                <div className='flex space-x-4 items-start'>
                    <div className="text-center bg-[length:100%_100%] bg-[url('../public/bg_mark.png')]"><p className='w-[40px] font-semibold h-[40px] leading-[40px]'>1</p></div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl font-semibold '>Choose an Animal or <span className='text-[#8787F7]'>create a Team</span></p>
                        <p className='text-sm font-semibold text-[#929292]'>We use the best AI models to make the most effective and adorable buddies. Plus we are always on the lookout for the latest and greatest integrations and are constantly updating and improving our technology.  They can even work together to complete multiple tasks at once and cross collaborate like a humanish team. </p>
                    </div>
                </div>
                <div className='flex space-x-4 items-start'>
                    <div className="text-center bg-[length:100%_100%] bg-[url('../public/bg_mark.png')]"><p className='w-[40px] font-semibold h-[40px] leading-[40px]'>2</p></div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl font-semibold '>Set directions and specify keywords</p>
                        <p className='text-sm font-semibold text-[#929292]'>Explain as simple and precisely as you can for the best output. We will automatically decide which AI LLM to use or you can specify your favorite. </p>
                    </div>
                </div>
                <div className='flex space-x-4 items-start'>
                    <div className="text-center bg-[length:100%_100%] bg-[url('../public/bg_mark.png')]"><p className='w-[40px] font-semibold h-[40px] leading-[40px]'>3</p></div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl font-semibold '>Buddies get to work</p>
                        <p className='text-sm font-semibold text-[#929292]'>The Zoo Buddies are highly trained and get smarter as you teach them and feed them content. Our AI Buddies are highly trained and get smarter as you teach them and feed them content. </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 pl-24 max-md:w-3/4 max-md:m-auto max-md:pl-0'>
                <Image
                    className='w-full'
                    src={step}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
        </div>
      </div>
    );
}

export default Steps;
