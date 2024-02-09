import React, { useState } from 'react'
import { Heading } from './Component/Heading'
import { InputBox } from './Component/InputBox'
import { useSearchParams } from 'react-router-dom'
import Axios from 'axios'

function Send({ username }) {
    const[amount,setAmount]=useState(0);
    const [searchParam] = useSearchParams();
    const id = searchParam.get('id');
    const name = searchParam.get('name');
    return (
        <div className='flex justify-center items-center bg-slate-200 h-screen'>
            <div className='w-[300px] h-[350px] rounded bg-white shadow-md p-2'>
                <div className='flex justify-center items-center'>
                    <Heading label={"Send Money"} />
                </div>
                <div className='mt-8 p-4 flex flex-col gap-2'>
                    <div className='flex justify-center items-center text-xl px-2'>
                        <div className='bg-green-500 rounded-full px-3 py-1 text-white'>
                            {name[0].toUpperCase()}
                        </div>
                        <p>{name.slice(1).toUpperCase()}</p>
                    </div>
                    <div className=''>
                        <div className="flex flex-col gap-1 p-2">
                            <div className=" text-start ">Amount</div>
                            <input type='number' onChange={(e)=>{
                                setAmount(e.target.value)
                            }} placeholder={"Enter the Amount"} className="p-2 border-2  rounded-md w-full" />
                        </div>
                        <ButtonSend onClick={async () => {
                            await Axios.post('http://localhost:3000/api/v1/account/transfer', {
                                to: id,
                                amount
                            },{
                                headers: {
                                    Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWM0NmVlZjg0NTg5YjlmMGNmODVlMDMiLCJpYXQiOjE3MDczNzIyNzF9.KPm30JQg3fbH8r1NlMSWbCv7uTv-Um-had0lsGhIbFE"
                                }})
                        }} label={"Send Money"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
function ButtonSend({ label, onClick }) {
    return <div className="flex flex-col gap-1 p-2">
        <button onClick={onClick} className="p-2 border-2 rounded-md w-full bg-green-500 text-white">{label}</button>
    </div>
}

export default Send