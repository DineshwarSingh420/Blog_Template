import React from 'react'

export default function Home() {
    return (
        <div className='h-[800px] w-full '>
            <div className='bg-gradient-to-b from-[#D9DAD9] to-[#F8F8F8]'>
                <div className=' relative h-1/2 w-full '>
                    <video autoPlay loop muted playsInline className=' opacity-10 object-container' width='100%' src="videos/walk_2.mp4"></video>

                    <div className='  h-[50%] flex flex-col absolute inset-0 justify-center items-center '>

                        <h1 className='text-black text-4xl font-cursive'>Tale Trove</h1>
                        <p className='text-black text-sm font-cursive mt-1'>Explore the World of Readers...</p>
                    </div>
                </div>

                <div className=' mt-[400px]  flex  gap-6 justify-center items-center h-[62%] flex-row absolute inset-0 w-full'>

                    <div className='relative w-1/6 mt-3 h-[70%]'>
                        <div className='  absolute opacity-30 flex inset-0 bg-[#FFFFFF80] '>
                            <div className=' h-[80%] w-[80%]  flex mx-auto my-auto  border-2 border-white '>

                            </div>
                        </div>

                        <img className='h-full' src="https://assets.website-files.com/56bc9b36590c6fab210da0ab/56c5f61d1457615e44cff5d7_photo-1-p-500x600.jpeg" alt="" />
                    </div>
                    <div className='w-1/6 h-[70%] mt-3'>
                        <img className='h-full' src="https://assets.website-files.com/56bc9b36590c6fab210da0ab/56c5f6de4d4f81a50633804b_photo-3.jpg" alt="" />
                    </div>
                    <div className=' w-1/6 h-[70%] mt-3'>
                        <img className='h-full' src="https://assets.website-files.com/56bc9b36590c6fab210da0ab/56c5f66cc7a3965c4469b289_photo-2-p-500x600.jpeg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
