import React, { useEffect, useState } from 'react'
import DashboardTopBar from './Component/DashboardTopBar'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';


function Dashboard() {
    const Balance = 5000;
    const [users,setUsers]=useState([]);
    const [filter,setFilter]=useState("");
    
    //Debouncing

    const dedounced =useDebounce(filter,300);
    useEffect(()=>{
        Axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + dedounced,
        {headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}}
        ).then((response)=>{
            setUsers(response.data.user);
            console.log(response.data.user);
        })        
    },[dedounced])
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
            <input onChange={(e) => {
                setFilter(e.target.value)
            }}className='w-full p-2 border-gray-200 border-2 rounded-lg' type="text" placeholder='Find Users'/>
        </div>
        <div className='mt-4'>
            {users.map((user)=>(
                <UserProfile key={user._id} id={user._id} userName={user.firstname} />
            ))}
        </div>
    </div>
  )
}
function UserProfile({userName,id}) {

    const navigate = useNavigate();
    return(
        <div className='flex justify-between gap-4 px-6 py-4'>
            <div className='flex justify-center items-center gap-3'>
                <div className='bg-green-500 rounded-full px-4 py-2 text-white'>
                    {userName[0].toUpperCase()}   
                </div>
                <p>{userName}</p>
            </div>
            <div className='bg-black rounded-lg p-2 text-white'>
            {/* <Link to={"/send"}> */}
                <button onClick={(e)=>{navigate("/send?id="+id+ "&name="+userName)}}>Send Money</button>
            {/* </Link> */}
            </div>
        </div>
    )
}
function useDebounce(value,n){
    const[dvalue,setdvalue]=useState(value);
    useEffect(()=>{
      const time=  setTimeout(()=>{
        setdvalue(value);
      },n)
      return ()=>{
        clearInterval(time)
      }
    },[value])
    return dvalue;
  }
export default Dashboard