import React, { useContext } from 'react'
import { useState, createContext } from "react";

const AuthContext = createContext(null)



export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const login = user => {
        setUser(user)
    }
    const logout = user => {
        setUser(null)
    }
    return (
        <>
            <AuthContext.Provider value={{ user, login, logout }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}