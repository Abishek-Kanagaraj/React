import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function User() {
    const {id,name}=useParams();
    const [searchParams, setSearchParams]=useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active'
  return (
    <>
    <div>
        <h1>User {id} {name}</h1>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams()}>Reset Filter</button>
    </div>
    {
      showActiveUsers?<h2>Showing Active Users</h2>:<h2>Showing all users</h2>
    }
    </>
  )
}