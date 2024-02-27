import { useRef } from "react";
import User from "./forwardRef";
export default function Parent() {
    const inputRef = useRef(null);
    function updateInput(){
        inputRef.current.value="1000";
    }
    return (
        <>
            <h2>Forward ref </h2>
            <User ref={inputRef}/>
            <button onClick={updateInput}>forward ref</button>
        </>
    );
}