import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { fetchGet } from "../../services/fetch-data";
import Sidebar from '../../components/sidebar/Sidebar';
import Dropdown from '../../components/dropdown/basic/Dropdown';

export default function Dashboard() {
    const data = useLoaderData();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const { username, role } = data;

    const logout = async () => {
        try {
            const { status } = await fetchGet('logout');
            if (status) navigate('/');
        } catch (error) {
            throw { status: error.status || 500, statusText: error.statusText || 'Server error!' };
        }
    }

    return (
        <div className='relative flex items-start bg-[#f7f5dd]'>
            <Sidebar show={show} onHandleShow={setShow} role={role} />
            <div className='w-full'>
                <div className='flex h-14 w-full items-center justify-between'>
                    <div className='inline-flex items-center gap-x-2'>
                        <h1 className='text-gray-800 text-xl font-marcellus font-bold hidden sm:block sm:ml-3'>Dashboard</h1>
                        <img src="/assets/img/logos/brand.png" alt="Brand logo" className='w-7 h-7 block ml-3 sm:hidden' />
                        <span onClick={() => setShow(!show)} className='block sm:hidden h-7 w-7 cursor-pointer rounded-full bg-white stroke-gray-900'>
                            <svg viewBox="0 0 24 24" className="stroke-inherit w-full h-full p-1">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"><path d="M4 6H20M4 12H14M4 18H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g>
                            </svg>
                        </span>
                    </div>
                    <div className='inline-flex items-center gap-x-4'>
                        <svg viewBox="0 0 24 24" className='fill-gray-700 w-6 h-6'><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10,20h4a2,2,0,0,1-4,0Zm8-4V10a6,6,0,0,0-5-5.91V3a1,1,0,0,0-2,0V4.09A6,6,0,0,0,6,10v6L4,18H20Z"></path></g></svg>
                        <span className='mr-7 rounded-full'>
                            <Dropdown button={<button className='w-7 h-7'><img src="/assets/img/profiles/default.png" alt="Default profile" className='w-full h-full' /></button>} options={
                                <>
                                    <div className='inline-flex items-center cursor-pointer'>
                                        <svg viewBox="0 0 24 24" className="fill-gray-700 w-5 h-5">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g id="style=fill">
                                            <g id="setting"><path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M10.8946 3.00654C10.2226 1.87704 8.75191 1.45656 7.59248 2.14193L5.86749 3.12906C4.59518 3.85639 4.16378 5.48726 4.8906 6.74522L4.89112 6.74611C5.26606 7.39298 5.20721 7.8062 5.09018 8.00929C4.97308 8.21249 4.64521 8.47001 3.9 8.47001C2.43322 8.47001 1.25 9.66837 1.25 11.12V12.88C1.25 14.3317 2.43322 15.53 3.9 15.53C4.64521 15.53 4.97308 15.7875 5.09018 15.9907C5.20721 16.1938 5.26606 16.607 4.89112 17.2539L4.8906 17.2548C4.16378 18.5128 4.59558 20.1439 5.8679 20.8712L7.59257 21.8581C8.75199 22.5434 10.2226 22.123 10.8946 20.9935L11.0091 20.7958C11.3841 20.1489 11.773 19.9925 12.0087 19.9925C12.2434 19.9925 12.6293 20.1476 12.9993 20.793L13.0009 20.7958L13.1109 20.9858L13.1154 20.9935C13.7874 22.123 15.258 22.5434 16.4174 21.8581L18.1425 20.871C19.4157 20.1431 19.8444 18.5235 19.1212 17.2579L19.1189 17.2539C18.7439 16.607 18.8028 16.1938 18.9198 15.9907C19.0369 15.7875 19.3648 15.53 20.11 15.53C21.5768 15.53 22.76 14.3317 22.76 12.88V11.12C22.76 9.65323 21.5616 8.47001 20.11 8.47001C19.3648 8.47001 19.0369 8.21249 18.9198 8.00929C18.8028 7.8062 18.7439 7.39298 19.1189 6.74611L19.1194 6.74522C19.8463 5.48713 19.4147 3.85604 18.1421 3.12883L16.4175 2.14193C15.2581 1.45656 13.7874 1.877 13.1154 3.00651L13.0009 3.20423C12.6259 3.85115 12.237 4.00751 12.0012 4.00751C11.7666 4.00751 11.3807 3.85247 11.0107 3.20701L11.0091 3.20423L10.8991 3.01421L10.8946 3.00654ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"></path></g>
                                            </g>
                                        </g>
                                        </svg>
                                        <p className="ml-2 font-semibold text-gray-800">Account</p>
                                    </div>
                                    <div onClick={async() => await logout()} className='inline-flex items-center cursor-pointer'>
                                        <svg viewBox="0 0 24 24" className="fill-red-500 w-5 h-5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z"></path> </g> </g></svg>
                                        <p className="ml-2 font-semibold text-red-800">Logout</p>
                                    </div>
                                </>
                            } />
                        </span>
                    </div>
                </div>
                <div className='pl-3 pt-5 h-screen flex flex-col justify-between'>
                    <div>
                        <p>This content for { role === 0 ? 'Admin' : 'User' }, { username }</p>
                    </div>
                    <div className='flex justify-end mr-5'>
                        <p className='font-semibold font-roboto'>Made by <span className='text-red-600'>❤</span> <span className='font-bold font-marcellus text-orange-500'>Waeng</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}