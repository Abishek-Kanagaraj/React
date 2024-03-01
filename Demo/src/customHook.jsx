import { useState } from "react";
import useTitle from "./hooks/useTitle";

export default function CustomHook(){
    const [count,setCount]=useState(0)
    useTitle(count);
    return(
        <>
        <button onClick={()=>setCount(count+1)}>Count - {count}</button>
        </>
    );
}