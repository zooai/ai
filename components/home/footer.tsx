"use client";
import Link from 'next/link';
function Footer() {
    return (
      <div className='bg-black py-32 px-24 max-md:py-24 max-md:px-8'>
        <p className='text-4xl max-md:text-3xl font-bold'>ZOO AI</p>
        <div className='flex max-md:flex-col pt-8 gap-16'>
            <div className='flex flex-col w-1/4 max-md:w-full border-b border-[#929293] pb-8'>
                <p className='text-lg font-bold border-b border-[#929293]'>Info</p>
                <div className='flex pt-6 gap-8'>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>ZOO AI</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Platform</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Our work</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Our team</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Reviews</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Support</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Chat with us</Link>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Affiliate program</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Account</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Blog</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Privacy</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Terms of use</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Pricing</Link>
                        <Link href='/' className='text-[#929293] hover:text-white text-sm'>Learning Center</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-1/4 max-md:w-full border-b border-[#929293] pb-8'>
                <p className='text-lg font-bold border-b border-[#929293]'>Products</p>
                <div className='pt-6 flex flex-col gap-3'>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Zoo Buddies - Cutest AI Ever</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>AI Document Editor</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>AI Food Delivery</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>AI Lifestyle</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Business Tools</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Prompt Ideas</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>24/7 Listening</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Transcribe Audio to Text</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>AI Image Generator</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>AI Video</Link>
                </div>
            </div>
            <div className='flex flex-col w-1/6 max-md:w-full border-b border-[#929293] pb-8'>
                <p className='text-lg font-bold border-b border-[#929293]'>Compare</p>
                <div className='pt-6 flex flex-col gap-3'>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Jasper.ai alternative</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Writesonic.com alternative </Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Rytr.me alternative </Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Copy.ai alternative </Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Hypotenuse.ai alternative</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Simplified.com alternative</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Hyperwriteai.com alternative</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Notion.so alternative</Link>
                </div>
            </div>
            <div className='flex flex-col w-1/3 max-md:w-full border-b border-[#929293] pb-8'>
                <p className='text-lg font-bold border-b border-[#929293]'>Latest Blogs</p>
                <div className='pt-6 flex flex-col gap-3'>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>AI in Email Marketing: Supercharge Open Rates &...</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>The AI Revolution: Transforming Personal Finance for...</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>The AI Revolution: Transforming Customer Engagement &...</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Supercharge Customer Experience with AI: 5 Strategies...</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Revolutionizing Customer Service: Unleashing the...</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>The Future of Work: Boosting Efficiency with AI Virtual...</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>Unleashing GPT-4 and Beyond: Exploring AI Content’s...</Link>
                    <Link href='/' className='text-[#929293] hover:text-white text-sm'>The AI Revolution: Transforming Customer Engagement &</Link>
                </div>
            </div>
        </div>
        {/* <div className='flex px-36 items-center justify-between'>
            <div className='flex flex-col justify-start space-y-4 w-1/2 mr-16'>
                
                <p className='text-xs'>Start for free and boost your productivity with ZOO AI.</p>
                <div className='max-w-[250px] rounded-lg bg-[#1E2533] px-4 py-2 text-center'>
                Get started. Its free.
                </div>
                <div className='flex items-center text-xs'>
                    <span>No credit card required</span>
                    <Link
                      href="/"
                      className="hover:text-[#929293]  text-white px-3 py-2  text-md">
                        <u>See plans & pricing</u>
                    </Link>
                </div>
            </div>
            <div className='w-1/2 ml-16'>
               
            </div>
        </div> */}
      </div>
    );
}

export default Footer;
