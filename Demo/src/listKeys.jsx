import React from 'react'

export default function ListKeys() {
    const names = [
        {
            id: 1,
            name: 'Abishek',
            age: 21
        }, {
            id: 2,
            name: 'Manoj',
            age: 22
        }, {
            id: 3,
            name: 'Sherjeel',
            age: 21
        }]
    const nameList = names.map((person) =>
        <li key={person.id}>I am {person.name}, I am {person.age} years old</li>

    )
    return (
        <>
            {nameList}
        </>
    )
}
