import { NextResponse } from "next/server";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { exec as execCb } from 'child_process'
import { promisify } from 'util';
import { join } from "path";
// Promisify the exec function
const exec = promisify(execCb);


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const uid = body.uid;
        // console.log(body);
        try {
            const path = process.env.PATH_TO_PUBLIC;
            const folderName: string = `${path}/public/code/${uid}`
            if (!existsSync(folderName)) {
                // console.log("hello");
                mkdirSync(folderName);

            }
        }
        catch (error) {
            console.log(error);
        }
        // console.log("up");
        const filename: string = `public/code/${uid}/hello.cpp`;
        writeFileSync(filename, body.code);
        let output: string = "";
        try {
            let { stdout, stderr } = await exec(`g++ -o hellocpp public/code/${uid}/hello.cpp && hellocpp.exe`)

            if (stderr) {
                output = `${stderr}`;
                console.log(`stderr: ${stderr}`);
                return NextResponse.json({ message: "success", output: output }, { status: 200 });
            }
            else {
                output = `${stdout}[Output Finished]`;
                // console.log(output);
                // console.log(stdout);
                return NextResponse.json({ message: "success", output: output }, { status: 200 });
            }
        }
        catch (err) {
            console.log(err.message);
            return NextResponse.json({ success: false, output: err.message }, { status: 200 });
        }



    }
    catch (err) {
        console.log(err.message);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}