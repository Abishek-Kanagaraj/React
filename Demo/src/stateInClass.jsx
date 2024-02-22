import { Component } from "react";

export default class Update extends Component{
    constructor(){
        super();
        this.state={
            data:0
        }
    }
    updateData(){
        this.setState({data:this.state.data+1})
    }
    render(){
        return(
            <>
            <h2>State in Class component data:{this.state.data}</h2>
            <button onClick={()=>this.updateData()}>Update Data</button>
            <hr/>
            </>
        );
    }
}