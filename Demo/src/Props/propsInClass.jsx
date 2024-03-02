import { Component } from "react";
export default class Student extends Component{
    render(){
        return(
            <>
            <h2>Props in class example: Welcome {this.props.name}</h2>
            </>
        );
    }
}