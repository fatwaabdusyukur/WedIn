import React, { useState } from 'react';

export default function TextInput({ attribute, valid, onHandleChange }) {
    const { id, label, type } = attribute;
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    return (
        <div className="w-full">
            <div className="group relative w-full z-0">
                <input
                    type={isPasswordVisible ? 'text' : type}
                    id={id}
                    name={id}
                    className={`peer block w-full appearance-none border-0 border-b-2 bg-transparent px-0 py-2.5 text-sm focus:outline-none focus:ring-0 ${
                        valid.status
                            ? 'text-gray-900 focus:border-blue-600 border-gray-300'
                            : 'border-red-300 text-red-500 focus:border-red-600'
                    }`}
                    placeholder=""
                    onChange={(e) => onHandleChange(e.target.value)}
                />
                <label
                    className={`absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium ${
                        valid.status
                            ? 'text-gray-500 peer-focus:text-blue-600'
                            : 'text-red-500 peer-focus:text-red-600'
                    }`}
                >
                    {label}
                </label>
                {type === 'password' && (
                    <span
                        onClick={togglePasswordVisibility}
                        className={`absolute right-1 top-3 z-10 origin-[0] -translate-y-8 transform duration-300 cursor-pointer peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 w-4 h-4 ${
                            valid.status
                                ? 'fill-gray-500 peer-focus:fill-blue-600'
                                : 'fill-red-500 peer-focus:fill-red-600'
                        }`}
                    >
                        {isPasswordVisible ? (
                            <svg className="fill-inherit" viewBox="0 0 16 16" fill="none">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 8L3.07945 4.30466C4.29638 2.84434 6.09909 2 8 2C9.90091 2 11.7036 2.84434 12.9206 4.30466L16 8L12.9206 11.6953C11.7036 13.1557 9.90091 14 8 14C6.09909 14 4.29638 13.1557 3.07945 11.6953L0 8ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
                                    ></path>
                                </g>
                            </svg>
                        ) : (
                            <svg className="fill-inherit" viewBox="0 0 16 16" fill="none">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16 16H13L10.8368 13.3376C9.96488 13.7682 8.99592 14 8 14C6.09909 14 4.29638 13.1557 3.07945 11.6953L0 8L3.07945 4.30466C3.14989 4.22013 3.22229 4.13767 3.29656 4.05731L0 0H3L16 16ZM5.35254 6.58774C5.12755 7.00862 5 7.48941 5 8C5 9.65685 6.34315 11 8 11C8.29178 11 8.57383 10.9583 8.84053 10.8807L5.35254 6.58774Z"
                                    ></path>
                                    <path d="M16 8L14.2278 10.1266L7.63351 2.01048C7.75518 2.00351 7.87739 2 8 2C9.90091 2 11.7036 2.84434 12.9206 4.30466L16 8Z"></path>
                                </g>
                            </svg>
                        )}
                    </span>
                )}
            </div>
            {!valid.status && <p className="mt-1 text-sm text-red-500">{valid.message}</p>}
        </div>
    );
}
