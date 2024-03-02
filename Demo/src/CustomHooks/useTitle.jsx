import { useEffect } from "react";

export default function useTitle(count){
    useEffect(()=>{
        document.title=`Count ${count}`
    },[count])
}