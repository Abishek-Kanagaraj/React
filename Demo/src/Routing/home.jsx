import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to Home page..</p>
            <button onClick={()=>navigate('/orderSummary')}>Place order</button>
        </div>
    )
}
