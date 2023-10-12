"use client";
import Image from 'next/image'
import sub_footer from '../../public/sub_footer.png'
import Link from 'next/link';
function SubFooter() {
    return (
      <div className='bg-gradient-to-r from-[#3E44BD] to-[#7D7DEE] py-16'>
        <div className='flex px-36 max-md:flex-col max-md:px-16 items-center justify-between'>
            <div className='flex flex-col justify-start space-y-4 w-1/2 max-md:w-full mr-16 max-md:mr-0'>
                <p className='text-3xl'>Work smarter with the most dynamic and adorable AI.</p>
                <p className='text-xs'>Start for free and boost your productivity with ZOO AI.</p>
                <div className='max-w-[250px] rounded-lg bg-[#1E2533] px-4 py-2 text-center'>
                Get started. Its free.
                </div>
                <div className='flex items-center text-xs'>
                    <span>No credit card required</span>
                    <Link
                      href="#plans"
                      className="hover:text-gray-300  text-white px-3 py-2  text-md">
                        <u>See plans & pricing</u>
                    </Link>
                </div>
            </div>
            <div className='w-1/2 ml-16 max-md:hidden'>
                <Image
                    className='w-full'
                    src={sub_footer}
                    width='1000'
                    height='1000'
                    alt=''
                />
            </div>
        </div>
      </div>
    );
}

export default SubFooter;
