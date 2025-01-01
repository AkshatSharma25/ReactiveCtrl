// pages/editor.js
"use client"
import React, { useEffect, useState } from 'react';
import Editor from '../../components/MonacoEditor';
import OutputWindow from '../../components/OutputWindow';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const EditorPage = () => {
    const router = useRouter();
    const pageLoaded = true;
    const [code, setCode] = useState("// Write your code here...");

    const [outputWindowVisibility, setOutputWindowVisiblity] = useState(false)
    const [finalOutput, setFinalOutput] = useState("");
    const [showOutput, setShowOutput] = useState(false);
    const handleCodeChange = (value) => {
        setCode(value);
    };

    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const user = sessionStorage.getItem('reactiveCtrl_user');
            // console.log(user)

            if (user === null) {
                toast("You need to Login first!");
                toast("Moving to Login page...")
                setTimeout(() => {

                    router.replace("/login")
                }, 2000);
            }
            else {
                const parsedUser = await JSON.parse(user)
                setUser(parsedUser);
                toast("Hi, User!")
            }
        }
        getUser();
    }, [pageLoaded])

    const notifyCodeSubmitted = () => toast('Code Submitted Successfully');

    const handleSubmitCode = async () => {
        if (code.length === 0) {
            return;
        }
        notifyCodeSubmitted()

        setOutputWindowVisiblity(true)
        const response = await axios.post(`/api/submit/c`, { code: code,uid:user.uid })
        setFinalOutput(response.data.output)
        setTimeout(() => {
            setShowOutput(true);
        }, 2000);

    }
    return (
        

<div className="absolute top-0 z-[-2] w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className={`flex flex-col  h-[100vh]`}>
            <div className='flex items-center justify-center'>
                <div className={`absolute top-0 left-[25vw] ${outputWindowVisibility ? "" : "hidden"}`}>
                    <button onClick={() => { setOutputWindowVisiblity(false); setShowOutput(false) }} className='p-4 absolute text-red-600 top-16 left-[47vw] z-50'>
                        X
                    </button>
                    <OutputWindow visible={outputWindowVisibility} output={finalOutput} show={showOutput} language={"c"} />
                </div>

                    <Navbar language={"C"} tab={"Editor"} />
                <div className='absolute z-1000 right-8'>
                    <button onClick={(e) => handleSubmitCode()} className={`bg-red-600 h-[5vh] ${outputWindowVisibility?"pointer-events-none":""} mt-1 px-4 flex gap-2 w-28  rounded-lg justify-center items-center`}>
                        <img src="/run.svg" alt="" />
                        Run
                    </button>

                </div>
            </div>
            <div className="w-full h-[90vh] px-8">
                <Editor
                    language="c"
                    value={code}
                    onChange={handleCodeChange}
                />
            </div>
            <Toaster />
            </div>
</div>
    );
};

export default EditorPage;