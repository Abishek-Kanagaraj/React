import { useRef } from "react";
export default function UseRef(){
    const inputRef=useRef(null);
    function control(){
        // inputRef.current.value="Abishek";
        // inputRef.current.style.display="none";
        inputRef.current.focus();
    }
    return(
        <>
        <h2>UseRef in react</h2>
        <input type="text" ref={inputRef} />
        <button onClick={()=>control()}>Change Ref</button>
        </>
    );
}