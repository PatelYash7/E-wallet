import React from 'react'
import { Heading } from './Component/Heading'
import { Subheading } from './Component/Subheading'
import { InputBox } from './Component/InputBox'
import { Button } from './Component/Button'
import { BottomText } from './Component/BottomText'

function Signup() {
  return (
    <div className='flex justify-center items-center h-screen  bg-neutral-500'> 
        <div className='min-h-[575px] min-w-[350px] rounded p-4 shadow-md bg-white '>
            <Heading label={"Signup"}/>
            <Subheading label={"Enter your details below"}/>
            <div className='pt-2'><InputBox type={"text"} label={"First Name"} placeholder={"ex-Yash"}/></div>
            <InputBox type={"text"} label={"Last Name"} placeholder={"ex-Patel"}/>
            <InputBox type={"email"} label={"Email"} placeholder={"abc@gmail.com"}/>
            <InputBox type={"text"} label={"Password"} placeholder={""}/>
            <Button label={"Signup"} onClick={console.log("Signup")}/>
            <BottomText label={"Already have an account?"} heading={"Signin"}/>
        </div>
    </div>
  )
}

export default Signup