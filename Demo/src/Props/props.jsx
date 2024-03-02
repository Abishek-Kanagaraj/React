import { useState } from "react";
export default function Welcome(props){
    const [name,setName]=useState("Abishek")//to update name we use "useState"
    return (
        <>
        <h1>Welcome, {name}!</h1>
        <button className="button" onClick={()=>setName("Ajay")}>Click to continue</button>
        <hr/>
        </>
    );
}