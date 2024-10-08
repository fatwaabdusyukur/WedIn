import React from 'react';

export default function TextInput({ attribute, valid, onHandleChange }){
    const { id, label, type } = attribute;
    
    return(
        <div className="w-full">
            <div onChange={(e) => onHandleChange(e.target.value)} className='group relative w-full z-0'>
                <input type={type} id={id} name={id} className={`peer block w-full appearance-none border-0 border-b-2 bg-transparent px-0 py-2.5 text-sm focus:outline-none focus:ring-0 ${valid.status ? 'text-gray-900 focus:border-blue-600 border-gray-300' : 'border-red-300 text-red-500 focus:border-red-600'}`} placeholder='' />
                <label className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 ${valid.status ? 'text-gray-500 peer-focus:text-blue-600' : 'text-red-500 peer-focus:text-red-600'}`}>{ label }</label>
            </div>
            { !valid.status && <p className='mt-1 text-sm text-red-500'>{ valid.message }</p> }
        </div>
    )
}