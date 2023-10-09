"use client";
import QA from '@/components/home/qa_panel'
function QAList() {
    const contents = [
        {
          title: "How are the words calculated?",
          content: "You will be charged the number of words the output contains. The number of words in our plans is the number of words you can generate in a month timeframe. If you choose a yearly plan, you will be able to generate the number of words you choose on a monthly basis and your word credits will reset every month."
        },
        {
            title: "Are GPT-4 available?",
            content: `Yes. Choose your preferred model in the settings on Zoo AI Chat. The Pro plan offers Unlimited use of GPT-4 with no message cap. 
            (Note: GPT-4 costs 3x more words with the regular tools on the starter plan and without subscription)`
        },
        {
            title: "How do I buy more words?",
            content: "You can either choose to subscribe to a plan or to make one-time purchases."
        },
        {
            title: "What is the commitment period?",
            content: "There is no commitment period and you can cancel your subscription at any time."
        },
        {
            title: "Can I write a long-form blog article (1,000+ words) with ZooAI?",
            content: "Absolutely! The new Long Form Blog writer lets you generate long articles. You can also use any of our blog post tools to generate the blog elements you need: titles, intros, outlines, or paragraphs."
        },
        {
            title: "Is the generated content unique and plagiarism-free every time?",
            content: "Yes. Our AI is nothing like you've tried before, it will almost always generate unique and plagiarism-free content. Zoo AI does not search the internet nor use content scrapped from the internet, it thinks and acts like a human content writer. Remember that you can always adjust the Creativity option in case you notice that the AI is repeating itself."
        },
        {
            title: "How long would it take to write a long article with AI?",
            content: "Using Zoo would help you to supercharge your content production by writing long articles in minutes, not hours. We estimate that it takes about 2 min to write a long-form article."
        },
        {
            title: "How can I cancel my plan?",
            content: `You can cancel your membership at any time and keep access to our tools until the end of your plan.
            Click on: Settings > Billing > Cancel my plan`
        },
        {
            title: "How can I boost my traffic with Zoo AI?",
            content: "Content marketing can help you expand your organic reach by writing blog articles. Zoo AI lets you write unlimited quality content that ranks, combine this with the right keyword research and you will dominate your niche in no time."
        },
        {
            title: `What does "3 free months" mean with a yearly plan?`,
            content: `Yearly plans are based on a 12-month rolling basis so you get access to Zoo AI for 12 months at the price of 9 months (3 months for free).`
        },
        {
            title: "What are the available payment methods?",
            content: `Zoo AI supports all major credit cards and debit cards. We secure your payment method with a 3D secure authentication for your privacy and protection.

            Zoo AI does not accept prepaid cards, or other cash apps at this time.`
        },
        {
            title: "How does Zoo compare to other tools?",
            content: "Zoo AI is using the worlds most smartest AI that allows you to write a 1,000+ words from just a title and keyword in seconds, without compromising the price. In terms of pricing, our Pro plan is the most generous on the market. It lets you generate unlimited words each month, which would cost you $1000+ a month with any other tool."
        },
        {
            title: "How do I use GPT-4?",
            content: `GPT-4 is available in some of our more advanced models for more reliable answers. To use GPT-4 with Zoo Chat, simply
            1. Click the three dots left to the input. 
            2. Click GPT-4 next to "Model".
            3. Write your message with GPT-4.`
        },
        {
            title: "What Generative AI models are available?",
            content: `There are multiple AI models available today. Zoo AI is using GPT-4 for complex answers, GPT-3.5 for fast daily answers, Claude for the AI document editor, Stable Diffusion, Open Journey & DALL·E 2. They are all available for all plans including for free.`
        },
        {
            title: "Can I get a discount code?",
            content: `Yes, we currently have code "ZOOCODE20" to save 20% on any plan. You can enter this code during checkout after entering your payment details.

            Please note that coupon codes only apply to the first interval of subscriptions. Sale is for a limited time only.`
        },
    ]
    return (
      <div className='bg-black p-32'>
        <p className='text-5xl text-center'>Frequently Asked Questions</p>
        <div className='mt-12 flex flex-col space-y-4'>
            {
                contents.map((data, index) => (
                    <QA title={data.title} content={data.content}/>
                    ))
            }
        </div>
      </div>
    );
}

export default QAList;
