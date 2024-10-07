import React from 'react';

export default function TextInput({ attribute, valid, onHandleChange }){
    const { id, label, type } = attribute;
    
    return(
        <div className="w-full">
            <div onChange={(e) => onHandleChange(e.target.value)} className={`relative rounded-md border shadow-sm  focus-within:ring-1 ${valid.status ? 'border-gray-300 focus-within:border-blue-600 focus-within:ring-blue-600' : 'border-red-200 focus-within:border-red-600 focus-within:ring-red-600'}`}>
                <input type={type} id={id} name={id} className={`${valid.status ? 'text-gray-700' : 'text-red-400'} w-full p-2 peer border-none bg-transparent placeholder:transparent focus:border-transparent focus:outline-none focus:ring-0`} placeholder='' />
                <span className={`${valid.status ? 'text-gray-700' : 'text-red-700'} pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs`}>{ label }</span>
            </div>
            { !valid.status && <p className='mt-1 text-sm text-red-500'>{ valid.message }</p> }
        </div>
    )
}