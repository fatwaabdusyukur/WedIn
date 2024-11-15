import React, { useState } from 'react';

export default function Dropdown({ button, options }) {
    const [show, setShow] = useState(false);
    const toggleButton = () => setShow(!show);

    return(
        <div className='relative'>
            { React.cloneElement(button, { onClick: toggleButton }) }
            <div className={`absolute right-0 top-full p-3 flex w-28 flex-col items-start gap-y-2 bg-white rounded border shadow-md transition-opacity duration-200 ease-in ${show ? 'opacity-100' : 'hidden opacity-0'}`} >
                { options }
            </div>
        </div>
    )
}