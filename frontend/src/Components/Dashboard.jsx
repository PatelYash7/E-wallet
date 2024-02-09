import React from 'react'
import DashboardTopBar from './Component/DashboardTopBar'
import { Subheading } from './Component/Subheading'
import { Link } from 'react-router-dom';

function Dashboard() {
    const Balance = 5000;
  return (
    <div className=''>
        <DashboardTopBar user={"User"} />
        <div className='flex flex-col gap-4 p-4'>
            <div className="font-bold  text-xl ">
                Your Balance {Balance}
            </div>
            <div className=" font-bold  text-xl ">
                Users
            </div>
        </div>
        <div className='flex p-4 '>
            <input className='w-full p-2 border-gray-200 border-2 rounded-lg' type="text" placeholder='Find Users'/>
        </div>
        <div className='mt-4'>
            <UserProfile userName={"Yash Patel"}/>
            <UserProfile userName={"Yash Patel"}/>
            <UserProfile userName={"Yash Patel"}/>
            <UserProfile userName={"Yash Patel"}/>
            <UserProfile userName={"Yash Patel"}/>
        </div>
    </div>
  )
}
function UserProfile({userName}) {
    return(
        <div className='flex justify-between gap-4 px-6 py-2'>
            <div className='flex justify-center items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <p>{userName}</p>
            </div>
            <div className='bg-black rounded-lg p-2 text-white'>
            <Link to={"/send"}>
                <button>Send Money</button>
            </Link>
            </div>
        </div>
    )
}

export default Dashboard