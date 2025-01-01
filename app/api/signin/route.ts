import { NextResponse } from "next/server";
import mysql from "mysql2/promise"

const connection = await mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  });

export async function POST(request:Request) {
    const { email,password } = await request.json();
    // console.log(email,password);
    const [results, fields] = await connection.query(
        `SELECT * FROM users where email = "${email}";`
    );
    if (results.length === 0) { 
        console.log("user not found, creating new user...");
        let [results, fields] = await connection.query(
            `INSERT INTO users (email,password) VALUES ("${email}","${password}");`
        );
        [results, fields] = await connection.query(`select * from users where email = ${email}`)
        return NextResponse.json({message:"success",user:{email:email,uid:results[0].uid}},{status:200})
        // return NextResponse.json({message:"success"},{status:200})
    }
    else {
        // console.log(results[0]);
        const passwordFromDB = results[0].password;
        // console.log(passwordFromDB);
        if (passwordFromDB !== password) {
            return NextResponse.json({message:"wrong password"},{status:401})
        }
        return NextResponse.json({message:"success",user:{email:email,uid:results[0].uid}},{status:200})
    }
    // console.log(results);
}