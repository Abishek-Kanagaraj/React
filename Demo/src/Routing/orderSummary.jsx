import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navigate=useNavigate()
    return (
        <div>
            <h1>Order Submitted</h1>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}

export default OrderSummary