"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const page = () => {
    return (
        <div className='absolute top-0 z-[-2] w-full bg-neutral-950 px-12 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
            <Navbar language={"any"} tab={"About"} />
            <section className="bg-white dark:bg-gray-900 h-[75vh] my-6">
                <div className="gap-20 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">I didn't reinvent the wheel</h2>
                        <p className="mb-2">
                            I’m a passionate developer, an innovator, and a problem solver who thrives on creating tools to empower others. As the sole creator of this online code editor, I’ve combined my love for coding with a vision to make development more accessible, efficient, and enjoyable for everyone.

                            This platform is designed to be fast, intuitive, and reliable — whether you’re a beginner exploring code or a seasoned developer working on your next project. I’ve built it with simplicity and performance in mind, ensuring it adapts to your needs at the pace you expect.</p>
                        <p>
                            Crafted with care, by a developer, for developers
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img className="w-full rounded-lg" src="myself.jpg" alt="office content 1" />
                        <img className=" w-full lg:mt-10 rounded-lg" src="myself2.jpg" alt="office content 2" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page
