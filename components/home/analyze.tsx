'use client'
import Image from 'next/image'
import analyze from '../../public/analyze.png'
function Analyze() {
  return (
    <div className="bg-black py-32 max-md:py-24">
      <p className="text-5xl font-semibold max-md:text-3xl text-center">
        Analyze your files. Word by word.
        <br />
        Cell by cell.
      </p>
      <div className="flex max-md:flex-col-reverse md:px-16 lg:px-36 max-md:px-8 pt-32 max-md:pt-16 items-center justify-between">
        <div className="space-y-4 w-1/2 mr-16 max-md:w-5/6 max-md:mr-0 max-md:pt-8">
          <p className="text-3xl xl:text-4xl font-semibold max-md:text-lg max-md:text-center">
            Ask your buddy to monitor and set smart home controls.
          </p>
          <p className="text-sm text-[#929292] font-semibold max-md:text-center">
            Easily monitor and control your energy consumption when you delegate
            the tasks to it or just say “set up my smarthome.”
          </p>
        </div>
        <div className="w-1/2 ml-16 max-md:w-5/6 max-md:ml-0">
          <Image
            className="w-full"
            src={analyze}
            width="1000"
            height="1000"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Analyze
