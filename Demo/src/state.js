import { useState } from "react"
export default function Increment(){
    const [data,setData]=useState(0);

    return(
        <div>
            <h2>Data for the useState example:{data}</h2>
            <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    )
}