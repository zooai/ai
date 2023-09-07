import {FaArrowLeft, FaShareAlt, FaFileExport, FaTrashAlt, FaSignOutAlt} from "react-icons/fa";
import Sideslider from '@/components/slider'
import Image from 'next/image'
function Subscription(props:any) {
    const { user, flag, event } = props;
      
    return (
        <div className={`absolute transition-all duration-300 ${
            flag == 4 ? 'translate-x-0' : '-translate-x-full'
          }  bg-black z-1  w-[100%] min-h-screen overflow-auto`}>
            <div className="flex flex-col h-screen">
                <h1 className="absolute w-full z-10 text-3xl pt-12 h-[180px] text-center pb-12 border-b-2 border-white">Blue the Beluga</h1>
                <div className='absolute top-0 left-0 z-10 cursor-pointer pl-4 pt-4' onClick={()=>event(0)}><FaArrowLeft /></div>
                <Sideslider />
                <div className='flex flex-col overflow-auto'>
                    <h2 className="border-b-2 py-3 px-5 border-white text-xl">Subscription</h2>
                    <p className="pt-6 pl-5 text-sm">Choose plan</p>
                    <div className="flex flex-col px-5 pt-6 space-y-3">
                        <div className="flex items-center space-x-4">
                            <p className="text-xl text-bold">Teams</p>
                            <p className="text-md">$99/mo</p>
                        </div>
                        <p className="text-xs">Advanced AI features to create content for multiple brands & collaborate on campaigns.</p>
                        <div className="border text-center w-full py-2 cursor-pointer">
                            Start free 7-day trial
                        </div>
                    </div>
                    <div className="flex flex-col px-5 pt-6 space-y-3">
                        <div className="flex items-center space-x-4">
                            <p className="text-xl text-bold">Creator</p>
                            <p className="text-md">$39/mo</p>
                        </div>
                        <p className="text-xs">Powerful AI features to create & improve your content everywhere you work online.</p>
                        <div className="border text-center w-full py-2 cursor-pointer">
                            Start free 7-day trial
                        </div>
                    </div>
                    <div className="flex flex-col px-5 py-6 space-y-3">
                        <div className="flex items-center space-x-4">
                            <p className="text-xl text-bold">Business</p>
                            <p className="text-md">Talk with sales</p>
                        </div>
                        <p className="text-xs">Personalized AI features with additional control, security, team training & tech support</p>
                        <div className="border text-center w-full py-2 cursor-pointer">
                            Contact sales
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Subscription