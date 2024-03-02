import { useEffect, useState } from "react";
export default function UseEffect(){
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.warn("useEffect called only once...")
        
        return ()=>{
            console.warn("Component unmounted")
            alert("Component unmounted")
        }
    },[])//this executes only once, act as componentDidMount() 
    // and the return function executes when component unmounted act as componentWillUnmount

    useEffect(()=>{
        console.warn("useEffect called...")
    },[count])//this executes only when the count changes, act as componentDidUpdate()
    
    return(
        <>
        <h2>useEffect Hook {count}</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>Increase count</button>
        </>
    );
}