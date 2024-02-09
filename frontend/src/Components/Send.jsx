import React from 'react'
import { Heading } from './Component/Heading'
import { InputBox } from './Component/InputBox'
import { Link } from 'react-router-dom'

function Send({username}) {
  return (
    <div className='flex justify-center items-center bg-slate-200 h-screen'>
        <div className='w-[300px] h-[350px] rounded bg-white shadow-md p-2'>
                <div className='flex justify-center items-center'>
                    <Heading label={"Send Money"}/>
                </div>     
                <div className='mt-8 p-4 flex flex-col gap-2'>
                    <div className='flex justify-center items-center text-xl px-2 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p>Yash Patel</p>
                    </div>    
                    <div className=''>
                        <InputBox label={"Amount(in Rs)"}/>
                        <ButtonSend label={"Send Money"}/>
                     </div>     
                </div>
        </div>
    </div>
  )
}
function ButtonSend({label,onClick}){
    return <div className="flex flex-col gap-1 p-2">
        <button className="p-2 border-2 rounded-md w-full bg-green-500 text-white" onClick={onClick}>{label}</button>
    </div>
}

export default Send