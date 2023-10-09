"use client";
import Image from 'next/image'
import solution1 from '../../public/solution1.png'
import solution2 from '../../public/solution2.png'
import solution3 from '../../public/solution3.png'
import solution4 from '../../public/solution4.png'
import solution5 from '../../public/solution5.png'
import solution6 from '../../public/solution6.png'
import gpt4 from '../../public/gpt4.png'
import step from '../../public/step.png'
function Solution() {
    return (
      <div className='bg-black py-32'>
        <p className='text-5xl text-center px-24'>Your <span className='text-[#8787F7]'>all-in-one</span> solution for next-level <span className='text-[#8787F7]'>Generative AI.</span></p>
        <div className='flex px-36 pt-32 items-stretch justify-between'>
            <div className='space-y-4 w-1/2 mr-16 flex flex-col justify-between items-center'>
                <div className='w-[1px] h-1/2 bg-[#929292]'></div>
                <div className='flex flex-col justify-center items-center space-y-4 py-8'>
                    <p className='text-4xl'>Train and Explain</p>
                    <p className='text-sm text-[#929292] text-center px-16'>Instead of spending hours analyzing and comparing the thousands of available language models we optimize to choose them for you at the most competitive prices OR specify which models to reference. </p>
                </div>
                <div className='w-[1px] h-1/2 bg-[#929292]'></div>
            </div>
            <div className='flex flex-col gap-12 w-1/2 ml-16'>
                <div className='flex justify-between gap-12'>
                    <Image
                        className='w-1/3'
                        src={solution1}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                    <Image
                        className='w-1/3'
                        src={solution2}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                    <Image
                        className='w-1/3'
                        src={solution3}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                </div>
                <div className='flex justify-between gap-12'>
                    <Image
                        className='w-1/3'
                        src={solution4}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                    <Image
                        className='w-1/3'
                        src={solution5}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                    <Image
                        className='w-1/3'
                        src={solution6}
                        width='1000'
                        height='1000'
                        alt=''
                    />
                </div>
            </div>
        </div>
        <div className='flex px-36 pt-36 items-stretch justify-between'>
            <div className='w-1/2 pr-24'>
                <Image
                    className='w-full'
                    src={gpt4}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
            <div className='space-y-4 w-1/2 flex flex-col justify-between items-center'>
                <div className='w-[1px] h-1/3 bg-[#929292]'></div>
                <div className='flex flex-col justify-center items-center space-y-4 py-8 px-12'>
                    <p className='text-4xl text-center px-16'>One subscription to manage all your tasks.</p>
                    <p className='text-sm text-[#929292] text-center px-16'>We use the best AI models to make the most effective and adorable buddies. Plus we are always on the lookout for the latest and greatest integrations and are constantly updating and improving our technology.  </p>
                </div>
                <div className='w-[1px] h-2/3 bg-[#929292]'></div>
            </div>
        </div>
        <div className='flex px-36 pt-36 items-stretch justify-between gap-24'>
            <div className='w-1/2 flex flex-col justify-between'>
                <p className='text-5xl'>Three <span className='text-[#8787F7]'>easy</span> steps!</p>
                <div className='flex space-x-4 items-start'>
                    <div className="text-center bg-[length:100%_100%] bg-[url('../public/bg_mark.png')]"><p className='w-[40px] h-[40px] leading-[40px]'>1</p></div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl'>Choose an Animal or create a Team</p>
                        <p className='text-sm text-[#929292]'>We use the best AI models to make the most effective and adorable buddies. Plus we are always on the lookout for the latest and greatest integrations and are constantly updating and improving our technology. </p>
                    </div>
                </div>
                <div className='flex space-x-4 items-start'>
                    <div className="text-center bg-[length:100%_100%] bg-[url('../public/bg_mark.png')]"><p className='w-[40px] h-[40px] leading-[40px]'>2</p></div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl'>Write your keywords</p>
                        <p className='text-sm text-[#929292]'>Explain as simple and precisely as you can for the best output. We will automatically decide which AI LLM to use or you can specify. </p>
                    </div>
                </div>
                <div className='flex space-x-4 items-start'>
                    <div className="text-center bg-[length:100%_100%] bg-[url('../public/bg_mark.png')]"><p className='w-[40px] h-[40px] leading-[40px]'>3</p></div>
                    <div className='flex flex-col space-y-4'>
                        <p className='text-xl'>Buddies get to work</p>
                        <p className='text-sm text-[#929292]'>The Zoo Buddies are highly trained and get smarter as you teach them and feed them content. They can even work together to complete multiple tasks at once and cross collaborate like a humanish team. </p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 pl-24'>
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

export default Solution;