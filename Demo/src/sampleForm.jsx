import React from 'react'
import { useState } from 'react'
export default function SampleForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [display, setDisplay]=useState(true)

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                setDisplay(false)}}>
                <div>
                    <label>First Name:</label>
                    <input type='text' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type='text' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            {!display?<div>{firstName}, {lastName}</div> :<h2>No values to display</h2>}

        </>
    )
}
