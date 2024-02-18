import React, { useState } from 'react'
import { Heading } from './Component/Heading'
import { Subheading } from './Component/Subheading'
import { InputBox } from './Component/InputBox'
import { Button } from './Component/Button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Signin() {
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center h-screen  bg-neutral-500'> 
        <div className='min-h-[400px] min-w-[350px] rounded p-4 shadow-md bg-white '>
            <Heading label={"Signin"}/>
            <Subheading label={"Enter your details below"}/>
            {/* <div className='pt-2'><InputBox type={"text"} label={"First Name"} placeholder={"Ex-Yash"}/></div> */}
            {/* <InputBox type={"text"} label={"Last Name"} placeholder={"Ex-Patel"}/> */}
            <InputBox type={"email"} onChange={(e)=>{setUsername(e.target.value)}} label={"Email"} placeholder={"abc@gmail.com"}/>
            <InputBox type={"text"} onChange={(e)=>{setPassword(e.target.value)}} label={"Password"} placeholder={""}/>
            <Button label={"Signin"} onClick={async()=>{
              const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                    username,
                    password
                });
                console.log(response.data.token);
                localStorage.setItem("token",response.data.token);
                navigate("/dashboard")
            }}/>
            <BottomTextIn label={"New User ?"} heading={"signup"}/> 
        </div>
    </div>
  )
}
export function BottomTextIn({label,heading}){
    return <div className='flex items-center justify-center p-2'>
    <p>
        {label}
        <Link to={'/signup'} className='underline pl-1 pb-1'> {heading}</Link>
    </p>
</div>
}

export default Signin