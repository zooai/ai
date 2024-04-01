"use client";
import Accordion from '@/components/home/accordion'
const contents = [
    {
      title: "Copy Writers",
      content: "Utilize the AI Writer for crafting long-form blogs and articles, and take advantage of the AI Document Editor (an improved version of Google Docs) for composing sales emails, essays, reports, and even ebooks. Furthermore, refine your content to perfection with our AI-powered editing tools: Paraphraser, Expander, and Shortener."
    },
    {
      title: "Content Creators",
      content: "Create captivating content that resonates with your audience. Our AI-powered platform offers powerful tools for brainstorming, crafting high-converting copy, and achieving exceptional results. Whether you're a blogger, copywriter, or social media influencer, our resources will help you take your content to the next level."
    },
    {
      title: "Marketers",
      content: "Creating compelling ad copy that drives conversions can be challenging. Enhance your conversion rates, elevate your CTRs, and lower your cost-per-click using our top-tier ad copy tools designed for Facebook, Google, and other platforms. Witness instant results for your brand with these exceptional ad copy solutions."
    },
    {
      title: "Entrepreneurs",
      content: "Effortlessly craft high-converting landing page copy with minimal input. In addition, spark fresh ideas for your burgeoning startup and employ our growth ideas generator to obtain inventive concepts for business expansion."
    },
    {
        title: "Basically Everyone",
        content: "Who says AI is only for tech gurus and digital wizards? Anyone can streamline their content creation process and deliver exceptional results. Whether you're a blogger, copywriter, or social media influencer, ZOO has everything you need to create content that truly stands out. So why wait?"
    },
]
function Unleash() {
    return (
      <div className='bg-black py-32 max-md:py-24 xl:px-48 lg:px-36 md:px-24 max-md:px-4 flex flex-col items-center' id='features_section'>
        <p className='text-5xl font-semibold max-md:text-3xl text-center'>Unleash the power of <span className="text-[#8787f7]">GPT-4.</span></p>
        <p className="text-sm text-[#929292] font-semibold pt-8 max-w-[600px] text-center">Create captivating SEO content for blog posts, articles, Facebook advertisements, Google Ads campaigns, Quora responses, and sales-related emails to boost click rates, lead generation, and boost sales revenue.</p>
        <div className="max-w-[1200px] w-full max-md:w-full bg-[length:100%_100%] bg-[url('../public/bg_unleash.png')] xl:p-24 lg:p-16 md:p-8 max-md:p-8 flex max-md:flex-col mt-16 rounded-xl space-x-12 max-md:space-x-0">
            <div className="flex flex-col w-[30%] max-md:w-full space-y-2">
                <p className='text-3xl max-md:text-center max-md:text-2xl'>We believe AI is for <span className="text-[#8787f7]">everyone.</span></p>
                <p className="text-xs max-md:text-center">(Inluding your Grandparents)</p>
            </div>
            <div className="flex flex-col w-[70%] max-md:w-full max-md:pt-8">
                {
                    contents.map((data, index) => (
                        <Accordion key={index} title={data.title} content={data.content}/>
                      ))
                }
            </div>
        </div>
      </div>
    );
}

export default Unleash;
