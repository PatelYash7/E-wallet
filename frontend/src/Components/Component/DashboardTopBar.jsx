import React from 'react'
import { DashboardHeading } from './DashboardHeading'

export default function DashboardTopBar({ user }) {
    return (
        <div className='flex justify-between tems-center p-2 border-t-[1px] border-b-[1px] bg-orange-100 border-gray-300'>
            <DashboardHeading label={"Payment App"} />
            <div className='flex justify-center items-center font-medium gap-2'>
                <p>Hello,{user}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>
        </div>
    )
}
