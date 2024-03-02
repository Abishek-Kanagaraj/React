import { Component, createRef } from "react";

export default class Ref extends Component{
    constructor(){
        super();
        this.inputRef=createRef();
    }
    control(){
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color="black";
        this.inputRef.current.style.backgroundColor="blue";
    }
    render(){
        return(
            <>
            <h1>Ref in React</h1>
            <input type="text" ref={this.inputRef} />
            <button onClick={()=>this.control()} >Ref</button>
            </>
        );
    }
}