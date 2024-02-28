import { useState } from "react";
import UseEffect from "./useEffect";

export default function Toggle(){
    const [display,setDisplay]=useState(true)
    return(
        <>
        <button onClick={()=>setDisplay(!display)}>Toggle</button>
        {display?<UseEffect />:<h2>component removed</h2>}
        </>
    );
}