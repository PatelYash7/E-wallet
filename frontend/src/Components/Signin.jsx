import React from 'react'
import { Heading } from './Component/Heading'
import { Subheading } from './Component/Subheading'
import { InputBox } from './Component/InputBox'
import { Button } from './Component/Button'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <div className='flex justify-center items-center h-screen  bg-neutral-500'> 
        <div className='min-h-[400px] min-w-[350px] rounded p-4 shadow-md bg-white '>
            <Heading label={"Signin"}/>
            <Subheading label={"Enter your details below"}/>
            {/* <div className='pt-2'><InputBox type={"text"} label={"First Name"} placeholder={"Ex-Yash"}/></div> */}
            {/* <InputBox type={"text"} label={"Last Name"} placeholder={"Ex-Patel"}/> */}
            <InputBox type={"email"} label={"Email"} placeholder={"abc@gmail.com"}/>
            <InputBox type={"text"} label={"Password"} placeholder={""}/>
            <Button label={"Signin"} onClick={console.log("Signin")}/>
            <BottomTextIn label={"New User ?"} heading={"signup"}/>
        </div>
    </div>
  )
}
export function BottomTextIn({label,heading}){
    return <div className='flex items-center justify-center p-2'>
    <p>
        {label}
        <Link to={'/signup'}> {heading}</Link>
    </p>
</div>
}

export default Signin