"use client";
import Image from 'next/image'
import task1 from '../../public/tasks1.png'
import task2 from '../../public/tasks2.png'
import task3 from '../../public/tasks3.png'
import task4 from '../../public/tasks4.png'
import Link from 'next/link';
import {FaChevronRight} from "react-icons/fa"
function Tasks() {
    return (
      <div className='bg-black p-32 max-md:py-24 max-md:px-0'>
        <p className='text-5xl max-md:text-3xl text-center'>Avoid the fatigue from <span className='text-[#8787F7]'>repetitive tasks</span><br />when you automate with Zoo Ai.</p>
        <div className='flex px-8 pt-32 max-md:pt-16 max-md:flex-col max-md:flex-col-reverse items-start justify-between gap-32'>
            <div className='w-1/2 max-md:w-full ml-16 max-md:ml-0 max-md:z-10 justify-between flex flex-col items-center max-md:bg-gradient-to-b from-[#00000000] via-[#0000007f] to-[#000000]'>
                <div className='w-[1px] h-[150px] bg-[#929292]'></div>
                <div className='flex flex-col py-8 space-y-4'>
                    <p className='text-3xl px-16 max-sm:px-4 text-center'>ZOO AI Buddies <br />Your Animal Companion</p>
                    <p className='text-xs px-16 max-sm:px-4 text-center'>Automating daily tasks like: Food Ordering, Business Tools, Recording + Transcribing, Lifestyle Support, and so much more!</p>
                </div>
                <div className='w-[1px] h-[300px] bg-[#929292]'></div>
            </div>
            <div className='sticky top-0 w-1/2 max-md:w-full mr-16 max-md:mr-0'>
                <Image
                    className='w-full'
                    src={task1}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
        </div>
        <div className='flex px-8 pt-32 max-md:pt-16 max-md:flex-col items-start justify-between gap-32'>
            <div className='sticky top-0 flex flex-col space-y-6 w-1/2 mr-16 py-8 max-md:w-full max-md:mr-0'>
                <Image
                    className='w-full'
                    src={task2}
                    width='1000'
                    height='1000'
                    alt=''
                />
                <div className='flex items-center justify-end gap-4'>
                    <Link
                      href="/"
                      className="text-[#8787f7]">Learn more
                    </Link>
                    <div className='button-gradient px-4 py-2 rounded-md flex items-center space-x-3'><span>Streamline your daily tasks</span><FaChevronRight /></div>
                </div>
            </div>
            <div className='w-1/2 max-md:w-full ml-16 max-md:ml-0 max-md:z-10 justify-between flex flex-col items-center max-md:bg-gradient-to-b from-[#00000000] via-[#0000007f] to-[#000000]'>
                <div className='w-[1px] h-[150px] bg-[#929292]'></div>
                <div className='flex flex-col py-8 space-y-4'>
                    <p className='text-3xl px-16 max-sm:px-4 text-center'>ZOO AI Buddies <br />Your Animal Companion</p>
                    <p className='text-xs px-16 max-sm:px-4 text-center'>Automating daily tasks like: Food Ordering, Business Tools, Recording + Transcribing, Lifestyle Support, and so much more!</p>
                </div>
                <div className='w-[1px] h-[300px] bg-[#929292]'></div>
            </div>
        </div>
        <div className='flex px-8 pt-32 max-md:pt-16 max-md:flex-col max-md:flex-col-reverse items-start justify-between gap-32'>
            <div className='w-1/2 max-md:w-full ml-16 max-md:ml-0 max-md:z-10 justify-between flex flex-col items-center max-md:bg-gradient-to-b from-[#00000000] via-[#0000007f] to-[#000000]'>
                <div className='w-[1px] h-[150px] bg-[#929292]'></div>
                <div className='flex flex-col py-8 space-y-4'>
                    <p className='text-3xl px-16 max-sm:px-4 text-center'>ZOO AI Buddies <br />Your Animal Companion</p>
                    <p className='text-xs px-16 max-sm:px-4 text-center'>Automating daily tasks like: Food Ordering, Business Tools, Recording + Transcribing, Lifestyle Support, and so much more!</p>
                </div>
                <div className='w-[1px] h-[300px] bg-[#929292]'></div>
            </div>
            <div className='sticky top-0 flex flex-col space-y-6 w-1/2 mr-16 py-8 max-md:w-full max-md:mr-0'>
                <Image
                    className='w-full'
                    src={task3}
                    width='1000'
                    height='1000'
                    alt=''
                />
                <div className='flex items-center justify-end gap-4'>
                    <Link
                      href="/"
                      className="text-[#8787f7]">Learn more
                    </Link>
                    <div className='button-gradient px-4 py-2 rounded-md flex items-center space-x-3'><span>Try Image Generator</span><FaChevronRight /></div>
                </div>
            </div>
        </div>
        <div className='flex px-8 pt-32 max-md:pt-16 max-md:flex-col items-start justify-between gap-32'>
            <div className='sticky top-0 flex flex-col space-y-6 w-1/2 mr-16 py-8 max-md:w-full max-md:mr-0'>
                <Image
                    className='w-full'
                    src={task4}
                    width='1000'
                    height='1000'
                    alt=''
                />
                <div className='flex items-center justify-end gap-4'>
                    <Link
                      href="/"
                      className="text-[#8787f7]">Learn more
                    </Link>
                    <div className='button-gradient px-4 py-2 rounded-md flex items-center space-x-3'><span>Try Document Editor</span><FaChevronRight /></div>
                </div>
            </div>
            <div className='w-1/2 max-md:w-full ml-16 max-md:ml-0 max-md:z-10 justify-between flex flex-col items-center max-md:bg-gradient-to-b from-[#00000000] via-[#0000007f] to-[#000000]'>
                <div className='w-[1px] h-[150px] bg-[#929292]'></div>
                <div className='flex flex-col py-8 space-y-4'>
                    <p className='text-3xl px-16 max-sm:px-4 text-center'>ZOO AI Buddies <br />Your Animal Companion</p>
                    <p className='text-xs px-16 max-sm:px-4 text-center'>Automating daily tasks like: Food Ordering, Business Tools, Recording + Transcribing, Lifestyle Support, and so much more!</p>
                </div>
                <div className='w-[1px] h-[300px] bg-[#929292]'></div>
            </div>
        </div>
      </div>
    );
}

export default Tasks;
