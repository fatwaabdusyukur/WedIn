import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ show, onHandleShow }){

    const handleShow = (event) => {
        if(event.target.tagName === 'ASIDE') onHandleShow(!show);
    }

    return(
        <aside onClick={(event) => handleShow(event)} className={`fixed -left-full sm:left-0 top-0 z-[9999] h-screen w-screen bg-black/15 transition-transform duration-200 ease-in sm:relative sm:w-fit ${show ? 'translate-x-full' : ''}`}>
            <div className='flex h-screen w-44 flex-col items-center gap-y-3 bg-[#F05A7E] md:w-48 lg:w-52'>
                <Link to='/' className='w-full px-5 mt-7 cursor-pointer'>
                    <img src="/assets/img/logos/logo.png" alt="Logo" className='w-full h-12 sm:h-16' />
                </Link>
            </div>
        </aside>
    )
}