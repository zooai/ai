"use client";
function Values() {
    const contents = [
        {
            title: "+45",
            content: "Integrated with the leading LLMs"
        },
        {
            title: "845k",
            content: "Extra secure transactions"
        },
        {
            title: "62M",
            content: "Regulated around the world"
        },
        {
            title: "986",
            content: "All you need to receive money"
        },
    ]
    return (
      <div className='bg-black py-16 px-32 max-md:py-24 max-md:px-8'>
        <div className='grid grid-cols-4 max-md:grid-cols-2 gap-8'>
            {
                contents.map((data, index) => (
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-4xl xl:text-5xl font-semibold">{data.title}</p>
                        <p className="md:text-sm text-center xl:text-md text-[#878787]">{data.content}</p>
                    </div>    
                ))
            }
        </div>
      </div>
    );
}

export default Values;
