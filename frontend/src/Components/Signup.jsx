import React, { useState } from 'react'
import { Heading } from './Component/Heading'
import { Subheading } from './Component/Subheading'
import { InputBox } from './Component/InputBox'
import { Button } from './Component/Button'
import { BottomText } from './Component/BottomText'
import Axios from 'axios';


function Signup() {
    //State Variables
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    
    
  return (
    <div className='flex justify-center items-center h-screen  bg-neutral-500'> 
        <div className='min-h-[575px] min-w-[350px] rounded p-4 shadow-md bg-white '>
            <Heading label={"Signup"}/>
            <Subheading label={"Enter your details below"}/>
            <div className='pt-2'><InputBox type={"text"} onChange={(e)=>{setFirstname(e.target.value)}} label={"First Name"} placeholder={"ex-Yash"}/></div>
            <InputBox type={"text"} label={"Last Name"} onChange={(e)=>{setLastname(e.target.value)}} placeholder={"ex-Patel"}/>
            <InputBox type={"email"} label={"Email"} onChange={(e)=>{setUsername(e.target.value)}} placeholder={"abc@gmail.com"}/>
            <InputBox type={"password"} label={"Password"} onChange={(e)=>{setPassword(e.target.value)}} placeholder={""}/>
            <Button label={"Signup"} onClick={async ()=>{
                const response = await Axios.post("http://localhost:3000/api/v1/user/signup",{
                    username,
                    firstname,
                    lastname,
                    password
                });
                console.log(response);
                localStorage.setItem("token",response.data.token);
            }}/>
            <BottomText label={"Already have an account?"} heading={"Signin"}/>
        </div>
    </div>
  )
}

export default Signup