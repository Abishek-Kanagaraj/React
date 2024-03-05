import React, { useState } from 'react'
import { useNavigate, useLocation} from 'react-router-dom'
import { useAuth } from './auth'

export default function Login() {
    const[user,setUser]=useState('')
    const auth=useAuth()
    const navigate=useNavigate()
    const location=useLocation()

    const redirectpath=location.state?.path||'/'

    const handleLogin=()=>{
        auth.login(user)
        navigate(redirectpath,{replace:true})
    }
  return (
    <div>
        <label>
            Username:
            <input type='text' onChange={(e)=>setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
