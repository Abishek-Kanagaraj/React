import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {id,name}=useParams();
  return (
    <div>
        <h1>User {id} {name}</h1>
        
    </div>
  )
}