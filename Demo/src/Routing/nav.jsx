import React from 'react'

import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

export default function Nav() {
    function navigateStyle({ isActive }) {
        return ({
            fontweight: isActive ? 'bold' : 'normal',
            color: isActive ? 'blue' : 'black'

        }
        )

    }
    const auth=useAuth()

    return (
        <nav className='main'>
            <NavLink style={navigateStyle} to="/">Home</NavLink>
            <NavLink style={navigateStyle} to="/about">About</NavLink>
            <NavLink style={navigateStyle} to="/products">Products</NavLink>
            <NavLink style={navigateStyle} to="/profile">Profile</NavLink>
            {
                !auth.user &&(
                    <NavLink style={navigateStyle} to="/login">Login</NavLink>
                )
            }
        </nav>
    )
}
