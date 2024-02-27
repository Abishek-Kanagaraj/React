import { Component } from "react";

export default class Bind extends Component{
    constructor(){
        super();
        this.hello=this.hello.bind(this)
    }
    hello(){
        alert("Hello, hava a nice day");
    }
    render(){
        return(
            <>
              <button onClick={this.hello}>Click to greet</button>
            </>
        );
    }
}