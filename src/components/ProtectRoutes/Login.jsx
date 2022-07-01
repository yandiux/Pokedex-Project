import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Login = ({logged}) => {



    if(logged === false){
        return (
        <div>
        <h1>Error 404</h1>
        </div>
        )
    } else{
        return <Navigate to='/login' />
    }
  
  
  
}

export default Login