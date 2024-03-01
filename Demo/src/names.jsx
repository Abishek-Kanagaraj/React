import React from 'react'

export default function Names({name}) {
    if (name === 'Abishek') {
        throw new Error("No specified name");
    }
    return (
        <>
            <h1>{name}</h1>
        </>
    )
}
