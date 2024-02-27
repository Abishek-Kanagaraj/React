import { useEffect, useState } from "react";
export default function UseEffect(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.warn("useEffect called...")
    },[])
    useEffect(()=>{
        console.warn("another useEffect called...")
    })
    return(
        <>
        <h2>useEffect Hook {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase count</button>
        </>
    );
}