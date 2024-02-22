import { useState } from "react";
export default function Input(){
    const [Data,setData]=useState(null)
    function getData(e){
        setData(e.target.value)
    }
    return(
        <>
        <h2>Input value {Data}</h2>
        <input type="text" onChange={(e)=>getData(e)}/>
        </>
    );
}