import React from 'react'
import { DashboardHeading } from './DashboardHeading'

export default function DashboardTopBar({ user }) {
    return (
        <div className='flex justify-between tems-center p-2 border-t-[1px] border-b-[1px] bg-orange-100 border-gray-300'>
            <DashboardHeading label={"Payment App"} />
            <div className='flex justify-center items-center font-medium gap-2'>
                <p>Hello,{user}</p>
            </div>
        </div>
    )
}
