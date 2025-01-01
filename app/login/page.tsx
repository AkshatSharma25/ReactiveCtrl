"use client"
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const page = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const router = useRouter();
    const pageLoaded = false;
    useEffect(() => {
        const user = sessionStorage.getItem('reactiveCtrl_user');
        // console.log(user)
        if (user !== null) {
            router.replace("/")
        }
    },[pageLoaded])
    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormSubmitted(true);
        let response:object={};
        try {
            response = await axios.post(`/api/signin`, { email: e.target.email.value, password: e.target.password.value })
            console.log(response.data.user)
            sessionStorage.setItem("reactiveCtrl_user", JSON.stringify(response.data.user));
            toast.success("Logged in successfully")
            setTimeout(() => {
                // setFormSubmitted(false);
                router.replace("/editor/python")
            }, 2000);
        }
        catch (error) {
            // console.log(response)
            // console.error(error.response.status)
            if (error.response) {
                toast.error("Invalid credentials")
                e.target.email.value = "";
                e.target.password.value = "";
                setFormSubmitted(false);
            }
            
        }
    }
    

    return (
        
<div className="h-full w-full bg-neutral-950 pt-12 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className='flex justify-center gap-2  items-center'>
            <section className='w-[40vw]'>
                <img src="/heroimage4.gif" alt="" />
            </section>
                <section className="bg-[#0a1817] w-[40vw] h-[88vh] flex justify-center items-center">
                    <div className={`flex ${formSubmitted?"":"hidden"}  flex-col  items-center justify-center px-6 py-8 mx-auto w-[35vw]`}>
                        Loading...
                    </div>
                    <div className={`flex ${formSubmitted?"hidden":""}  flex-col  items-center justify-center px-6 py-8 mx-auto w-[35vw]`}>
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className=" h-16 mr-2" src="/logo.png" alt="logo" />
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your Account
                            </h1>
                            <form onSubmit={(e)=>{handleSubmit(e)}} className="flex flex-col items-center justify-center gap-8" action="#">
                                <div className='w-full'>
                                    <label htmlFor='email'  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="password"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" minLength={8} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                </div>
                                
                                <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   hover:bg-primary-700 focus:ring-primary-800"  >Sign in</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            <Toaster/>
        </div >
    )
}

export default page
