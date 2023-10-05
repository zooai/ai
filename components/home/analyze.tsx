"use client";
import Image from 'next/image'
import analyze from '../../public/analyze.png'
function Analyze() {
    return (
      <div className='bg-black py-32'>
        <p className='text-5xl text-center'>Analyze your files. Word by word.<br />Cell by cell.</p>
        <div className='flex px-36 pt-32 items-center justify-between'>
            <div className='space-y-4 w-1/2 mr-16'>
                <p className='text-3xl'>Ask your buddy to monitor and set smart home controls.</p>
                <p className='text-xs'>Easily monitor and control your energy consumption when you delegate the tasks to it or just say “set up my smarthome.”</p>
            </div>
            <div className='w-1/2 ml-16'>
                <Image
                    className='w-full'
                    src={analyze}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
        </div>
      </div>
    );
}

export default Analyze;
