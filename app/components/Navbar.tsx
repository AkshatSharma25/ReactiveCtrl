import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = ({ language, tab }) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    // const [userLoggedIn, setUserLoggedIn] = useState(false)
    const rendered = false;
    const [user, setuser] = useState(null)
    useEffect(() => {
        const user = sessionStorage.getItem('reactiveCtrl_user');
        const parsedUser = JSON.parse(user)
        console.log(parsedUser)
        if (user === null) {
            setuser(null);
        }
        else {
            setuser(parsedUser);
        }
    }, [rendered])
    return (
        <div>
            <div className='flex mt-3 mb-1  w-[96vw] justify-center items-center'>
                <div className=' list-none w-1/3 h-full flex justify-end items-center gap-4'>

                    <li className={`px-4 ${tab === "Editor" ? "" : "hidden"} flex justify-center items-center gap-2`}>
                        <img src={`/${language}.png`} alt="" width={30} />
                        {language}
                    </li >
                    <img src="/logo.png" className='rounded-2xl overflow-hidden' height={10} width={150} alt="" />

                </div>
                <ul className='w-2/3 ml-4 px-4 py-1 flex list-none gap-12'>

                    <li className={`px-4 ${tab === "Home" ? "border-2 rounded-lg text-red-600 border-red-600" : ""}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`px-4 ${tab === "Editor" ? "border-2 rounded-lg text-red-600 border-red-600" : ""}`}>
                        <Link href="/editor/python">Editor</Link>
                    </li>
                    <li className={`px-4 ${tab === "About" ? "border-2 rounded-lg text-red-600 border-red-600" : ""}`}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={`px-4 ${tab === "Privacy" ? "border-2 rounded-lg text-red-600 border-red-600" : ""}`}>
                        <Link href="/privacypolicy">Privacy Policy</Link>
                    </li>
                    <li className={`px-4 text-red-600 ${(tab !== "Editor" && user!==null) ? "" : "hidden"}`}>
                        {user?.email}
                    </li>
                    <li className={`${(user !== null || tab==="Editor") ? "hidden" : ""} px-4 text-red-600 border-2 border-red-600 rounded-lg`}>
                        <Link href="/login">
                            Login
                        </Link>
                    </li>
                    <li className={`px-4 ${tab === "Editor" ? "" : "hidden"}`}>
                        <button className='flex ' onClick={() => { setDropdownVisibility(!dropdownVisibility) }} >
                            <span>Change Language</span> <svg className={`${dropdownVisibility ? "hidden" : ""}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                            <svg className={`${!dropdownVisibility ? "hidden" : ""}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" /></svg>
                        </button>

                        <div className={`z-10 absolute top-12  bg-gray-900  w-36 h-36 right-64 p-2 ${dropdownVisibility ? "" : "hidden"}`}>
                            <ul className='flex flex-col  justify-center items-center gap-2'>
                                <Link href="/editor/python" className='w-full text-center'>
                                    Python
                                </Link>
                                <Link href="/editor/cpp" className='w-full text-center'>
                                    C++
                                </Link>
                                <Link href="/editor/c" className='w-full text-center'>
                                    C
                                </Link>
                                <Link href="/editor/js" className='w-full text-center'>
                                    JavaScript
                                </Link>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar
