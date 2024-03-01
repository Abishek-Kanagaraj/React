import React, {useState} from 'react'


export default function LiftStateUp() {
    const [data,setData]=useState(0);
    function Change(item){
        setData(item)
    }
  return (
    <>
    <h1>Lift State Up</h1>
    <Child val={data} Change={Change}/>
    <br/>
    <Child val={data} Change={Change}/>
    </>
  )
}

export function Child({val, Change}) {
  return (
    <>
    <input type='text' value={val} onChange={(e)=>{Change(e.target.value)}} />
    </>
  )
}

