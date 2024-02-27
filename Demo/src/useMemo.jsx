import { useState, useMemo } from "react";
export default function UseMemo() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(0)
    
    const multiMemo=useMemo(function MultiCount() {
        console.warn("MultiCount called...")
        return count * 2;
    },[count])
    return (
        <>
            <h2>useMemo Hook {count}</h2>
            <h2>Multi Count: {multiMemo}</h2>
            <h2>Item: {item}</h2>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <button onClick={() => setItem(item + 1)}>Increase Item</button>
        </>
    );
}