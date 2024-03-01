import { useReducer } from "react";

const intialState = {
    firstCount:0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {firstCount:state.firstCount + action.value};
        case 'decrement':
            return {firstCount:state.firstCount - action.value};
        case 'reset':
            return intialState;
        default:
            return state;
    }
}

export default function ComplexReducer() {
    const [count, dispatch] = useReducer(reducer, intialState)
    return (
        <>
            <div>Count - {count.firstCount}</div>
            <button onClick={() => dispatch({type:'increment', value:5})}>Increment 5</button>
            <button onClick={() => dispatch({type:'decrement', value:5})}>Decrement 5</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </>
    );
}

