"use client";
import Image from 'next/image'
import iconImage from '../public/ZOO.png'
import feature1 from '../public/feature1.png'
import feature2 from '../public/feature2.png'
import feature3 from '../public/feature3.png'
import feature4 from '../public/feature4.png'
import feature5 from '../public/feature5.png'
import feature6 from '../public/feature6.png'
import { FaAngleUp, FaAngleDown, FaChevronRight } from "react-icons/fa";
import React, { useState } from 'react';
import Link from 'next/link';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className={`${isOpen ? 'fixed' :'absolute'} max-md:fixed w-full bg-transparent z-10 max-md:bg-black`}>
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 ">
          <div className="flex items-center justify-between h-20 max-md:flex-row-reverse">
              <div className="md:hidden">
                  <button
                  type="button"
                  onClick={toggleMenu}
                  className="text-white inline-flex items-center justify-center p-2 "
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                  >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19 17.5H1V16H19V17.5ZM13 10.5H1V9H13V10.5ZM1 3.5V2H19V3.5H1Z" fill="white"/>
                      </svg>
                  ) : (
                      <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                      />
                      </svg>
                  )}
                  </button>
              </div>
              <div className="flex items-center">
                  <div className="shrink-0">

                  <Link
                      href="/home"
                      className="text-gray-300  hover:text-white px-3 py-2  text-md font-medium">
                      <Image alt="ZOO" src={iconImage} width='90' height='64' />
                  </Link>
                  </div>
              </div>
              <div className="hidden md:block relative">
                  <div className="mx-10 flex items-baseline xl:space-x-16 md:space-x-2 lg:space-x-8 2xl:space-x-20">
                    <div className=''  onMouseEnter={handleHover}  onMouseLeave={handleMouseLeave}>
                      <Link
                          href="#features_section"
                          className="text-gray-300  hover:text-white px-3 pt-2 pb-5  text-sm font-medium"
                      >
                          Features
                      </Link>
                      <div className={`absolute max-w-[400px] ${isHovered ? 'block' :'hidden'} rounded-xl bg-[#151C25] p-6 flex flex-col gap-3 top-[40px]`}>
                        <Link href='/features/listening' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                          <div className='flex items-center justify-start gap-3'>
                            <Image alt="feature" src={feature1} width='40' height='40' />
                            <div className='flex flex-col gap-1'>
                              <p className='text-[14px] font-bold'>24-7 Listening Capabilities</p>
                              <p className='text-[11px] text-[#ffffff99]'>Always ready to hear your voice, it analyzes conversations to be referenced in the future, with the ability to turn on or off.</p>
                            </div>
                          </div>
                        </Link>
                        <Link href='/features/tools' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                          <div className='flex items-center justify-start gap-3'>
                            <Image alt="feature" src={feature2} width='40' height='40' />
                            <div className='flex flex-col gap-1'>
                              <p className='text-[14px] font-bold'>Business Tools & Virtual Assistance</p>
                              <p className='text-[11px] text-[#ffffff99]'>Professional tools designed with a touch of charm to brighten up your workday.</p>
                            </div>
                          </div>
                        </Link>
                        <Link href='/features/memory' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                          <div className='flex items-center justify-start gap-3'>
                            <Image alt="feature" src={feature3} width='40' height='40' />
                            <div className='flex flex-col gap-1'>
                              <p className='text-[14px] font-bold'>Unlimited Memory + Personalization</p>
                              <p className='text-[11px] text-[#ffffff99]'>Train and choose from different adorable personality settings, with infinite memory and even team up multiple buddies to collaborate!</p>
                            </div>
                          </div>
                        </Link>
                        <Link href='/features/dictate' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                          <div className='flex items-center justify-start gap-3'>
                            <Image alt="feature" src={feature4} width='40' height='40' />
                            <div className='flex flex-col gap-1'>
                              <p className='text-[14px] font-bold'>Dictate Action Items</p>
                              <p className='text-[11px] text-[#ffffff99]'>Managing emails, messages and automation has never been so enjoyable, thanks to its friendly interface, you say an actionable item and it does!</p>
                            </div>
                          </div>
                        </Link>
                        <Link href='/features/creative' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                          <div className='flex items-center justify-start gap-3'>
                            <Image alt="feature" src={feature5} width='40' height='40' />
                            <div className='flex flex-col gap-1'>
                              <p className='text-[14px] font-bold'>Creative Work Done in Seconds</p>
                              <p className='text-[11px] text-[#ffffff99]'>Whether its image generation, adapting pictures for social platforms, recognizing images, cropping, editing, etc. your Buddy executes effortlessly.</p>
                            </div>
                          </div>
                        </Link>
                        <Link href='/features/lifestyle' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                          <div className='flex items-center justify-start gap-3'>
                            <Image alt="feature" src={feature6} width='40' height='40' />
                            <div className='flex flex-col gap-1'>
                              <p className='text-[14px] font-bold'>Lifestyle to Smart Home</p>
                              <p className='text-[11px] text-[#ffffff99]'>Automate your life with the cutest companion in tech, making daily routines more delightful, from smart home controls, to food delivery and hiring lifestyle services.</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <Link
                        href="#"
                        className="text-gray-300  hover:text-white px-3 py-2  text-sm font-medium"
                    >
                        Use Cases
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-300  hover:text-white px-3 py-2  text-sm font-medium"
                    >
                        How it works?
                    </Link>
                    <Link
                        href="#"
                        className="text-gray-300  hover:text-white px-3 py-2  text-sm font-medium"
                    >
                      <>
                      Solutions
                      </>
                    </Link>
                  {/* Add more links here */}
                  </div>
              </div>
              
                  <Link
                      href="/sign-in"
                      className="text-white max-md:hidden bg-transparent border border-white hover:text-black hover:bg-white px-3 py-2 rounded-full text-xs md:block mr-3"
                  >
                      Log In / Sign Up
                  </Link>

          </div>
        </div>
        {isOpen && (
          <div className="md:hidden fixed overflow-auto z-50 h-[calc(100vh-80px)] top-20 w-full bg-black" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#"
                onClick={()=>{setIsClicked(!isClicked)}}
                className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center justify-between px-3 py-2 rounded-md text-[32px] font-medium"
              >
                <span>Features</span>
                {isClicked ? <FaAngleUp /> :<FaAngleDown />}
              </Link>
              <div className={`w-full ${isClicked ? 'block' :'hidden'} rounded-xl bg-black p-6 max-md:p-2 flex flex-col gap-3 max-md:gap-2`}>
                <Link href='/features/listening' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                  <div className='flex items-center justify-start gap-3'>
                    <Image alt="feature" src={feature1} width='40' height='40' />
                    <div className='flex flex-col gap-1'>
                      <p className='text-[14px] font-bold'>24-7 Listening Capabilities</p>
                      <p className='text-[11px] text-[#ffffff99]'>Always ready to hear your voice, it analyzes conversations to be referenced in the future, with the ability to turn on or off.</p>
                    </div>
                  </div>
                </Link>
                <Link href='/features/tools' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                  <div className='flex items-center justify-start gap-3'>
                    <Image alt="feature" src={feature2} width='40' height='40' />
                    <div className='flex flex-col gap-1'>
                      <p className='text-[14px] font-bold'>Business Tools & Virtual Assistance</p>
                      <p className='text-[11px] text-[#ffffff99]'>Professional tools designed with a touch of charm to brighten up your workday.</p>
                    </div>
                  </div>
                </Link>
                <Link href='/features/memory' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                  <div className='flex items-center justify-start gap-3'>
                    <Image alt="feature" src={feature3} width='40' height='40' />
                    <div className='flex flex-col gap-1'>
                      <p className='text-[14px] font-bold'>Unlimited Memory + Personalization</p>
                      <p className='text-[11px] text-[#ffffff99]'>Train and choose from different adorable personality settings, with infinite memory and even team up multiple buddies to collaborate!</p>
                    </div>
                  </div>
                </Link>
                <Link href='/features/dictate' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                  <div className='flex items-center justify-start gap-3'>
                    <Image alt="feature" src={feature4} width='40' height='40' />
                    <div className='flex flex-col gap-1'>
                      <p className='text-[14px] font-bold'>Dictate Action Items</p>
                      <p className='text-[11px] text-[#ffffff99]'>Managing emails, messages and automation has never been so enjoyable, thanks to its friendly interface, you say an actionable item and it does!</p>
                    </div>
                  </div>
                </Link>
                <Link href='/features/creative' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                  <div className='flex items-center justify-start gap-3'>
                    <Image alt="feature" src={feature5} width='40' height='40' />
                    <div className='flex flex-col gap-1'>
                      <p className='text-[14px] font-bold'>Creative Work Done in Seconds</p>
                      <p className='text-[11px] text-[#ffffff99]'>Whether its image generation, adapting pictures for social platforms, recognizing images, cropping, editing, etc. your Buddy executes effortlessly.</p>
                    </div>
                  </div>
                </Link>
                <Link href='/features/lifestyle' className='p-1 rounded-xl hover:bg-[#3d3dc226]'>
                  <div className='flex items-center justify-start gap-3'>
                    <Image alt="feature" src={feature6} width='40' height='40' />
                    <div className='flex flex-col gap-1'>
                      <p className='text-[14px] font-bold'>Lifestyle to Smart Home</p>
                      <p className='text-[11px] text-[#ffffff99]'>Automate your life with the cutest companion in tech, making daily routines more delightful, from smart home controls, to food delivery and hiring lifestyle services.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[32px] font-medium"
              >
                Use Cases
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[32px] font-medium"
              >
                How it works?
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-[32px] font-medium"
              >
                <>
                Solutions
                </>
              </Link>
              <div className='flex items-center px-3 py-2 justify-stretch gap-4'>
                <Link href='/sign-up' className='w-1/2'><div className='button-gradient w-full px-4 py-2 rounded-md flex items-center space-x-3'><span>Start for free</span><FaChevronRight /></div></Link>
                <Link href='/sign-in' className='bg-[#10151f] w-1/2 text-center text-white py-2 rounded-md'>Log In</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
  );
}

export default Header;
