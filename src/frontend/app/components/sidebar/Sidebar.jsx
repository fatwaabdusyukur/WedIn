import React, { useState } from 'react';

export default function Sidebar(){
    const [wide, setWide] = useState(false);

    return(
        <div className={`relative flex h-screen flex-col items-center overflow-hidden bg-pink-700 text-gray-400 ${wide ? 'w-40' : 'w-16'}`}>
            <span onClick={() => setWide(!wide)} className='fixed left-14 top-[10%] rounded-r-full bg-pink-700 py-2 px-4 cursor-pointer'>
                {wide ? (
                    <svg  className='fill-gray-50 w-4 h-4' viewBox="0 0 1920 1920"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fillRule="evenodd"> <path d="M1136 176.142 959.87.012-.248 960.131 959.87 1920 1136 1743.87 352.136 960.131 1136 176.142Z"></path> <path d="M1920 176.142 1743.87.012 783.752 960.131 1743.87 1920 1920 1743.87l-783.86-783.739L1920 176.142Z"></path> </g> </g></svg>
                ) : (
                    <svg className="fill-gray-50 w-4 h-4" viewBox="0 0 1920 1920">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                        <g fillRule="evenodd">
                            <path d="M0 176.142 176.13.012l960.12 960.119L176.13 1920 0 1743.87l783.864-783.739L0 176.142Z"></path>
                            <path d="M784 176.142 960.13.012l960.12 960.119L960.13 1920 784 1743.87l783.86-783.739L784 176.142Z"></path>
                        </g>
                        </g>
                    </svg>
                )
                }
            </span>
        </div>
    )
}