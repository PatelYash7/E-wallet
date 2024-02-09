import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Components/Signup.jsx'
import Signin from './Components/Signin.jsx'
import Send from './Components/Send.jsx'
import Dashboard from './Components/Dashboard.jsx'

const router= createBrowserRouter([
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/signin',
    element:<Signin/>
  },
  {
    path:'/send',
    element:<Send/>
  },{
    path:'/dashboard',
    element:<Dashboard/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
