import React from 'react'
import Image from "../../assets/pfpimg.png"
import Mic from "../../assets/mic-line.png"
import file from "../../assets/file-image-line.png"
import sent from "../../assets/send-plane-2-line.png"

const Mainav = () => {
    return (
        <div className='h-[full] w-[92%] flex flex-col justify-between '>
            <div className='h-[8%] w-[100%]  '>
                <div className='flex h-[100%] w-[100%] items-center justify-between px-[20px]'>
                    <h4 className='text-black text-2xl '>Gemini</h4>
                    <div className='h-[40px] w-[40px] bg-amber-950 rounded-full overflow-hidden'>
                        <img className="h-full w-full object-cover" src={Image} alt="" />
                    </div>
                </div>
            </div>
            <div className='h-[50%] w-full   mt-[5%]  pl-[20%]'>
                <div >
                    <h1 className='text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>Hello, Dev.</h1>
                    <h1 className='text-5xl font-bold text-[#C4C7C5] mt-5 '>How can I help you today?</h1>
                </div>
                <div className='mt-22 flex gap-[30px]'>
                    <div className='h-[220px] w-[220px]  p-[10px]   bg-[#F0F4F9] rounded-2xl flex flex-col justify-between'>
                        <h3 className='text-[17px] italic '>
                            Suggest beautiful <br /> places to see on <br /> an upcoming road trip
                        </h3>
                        <div className='h-[35px] w-[35px] bg-white self-end rounded-full'></div>
                    </div>
                    <div className='h-[220px] w-[220px]  p-[10px]   bg-[#F0F4F9] rounded-2xl flex flex-col justify-between'>
                        <h3 className='text-[17px] italic '>
                            Suggest beautiful <br /> places to see on <br /> an upcoming road trip
                        </h3>
                        <div className='h-[35px] w-[35px] bg-white self-end rounded-full'></div>
                    </div>
                    <div className='h-[220px] w-[220px]  p-[10px]   bg-[#F0F4F9] rounded-2xl flex flex-col justify-between'>
                        <h3 className='text-[17px] italic '>
                            Suggest beautiful <br /> places to see on <br /> an upcoming road trip
                        </h3>
                        <div className='h-[35px] w-[35px] bg-white self-end rounded-full'></div>
                    </div>
                    <div className='h-[220px] w-[220px]  p-[10px]   bg-[#F0F4F9] rounded-2xl flex flex-col justify-between'>
                        <h3 className='text-[17px] italic '>
                            Suggest beautiful <br /> places to see on <br /> an upcoming road trip
                        </h3>
                        <div className='h-[35px] w-[35px] bg-white self-end rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='h-[20%] w-full p-3 '>
                <div className='flex flex-col items-center h-full w-full justify-end gap-2' >
                    <div className='flex bg-[#F0F4F9] w-[50%] px-[5px] justify-between px-[22px] p-[16px] rounded-full '>
                        <input className='outline-0  w-full' type="text" placeholder='Enter a Prompt here' />
                        <div className='flex gap-[15px]'>
                            <img src={Mic} alt="" />
                            <img src={file} alt="" />
                            <img src={sent} alt="" />
                        </div>
                    </div>
                    <p className='font-medium text-[13px]'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>

        </div>
    )
}

export default Mainav
