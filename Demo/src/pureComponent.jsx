import { PureComponent } from "react";

export default class Pure extends PureComponent{
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    render(){
        console.warn("Re-rendering...")
        return(
            <>
            <h1>Pure Component {this.state.count}</h1>
            <button onClick={()=>{this.setState({count:1})}}>Update</button>
            </>
        );
    }
}