import React,{Component} from 'react'

// Functional Component
export default function User(){
    function Nested(){
        return(
        <h3>It's an nested component</h3>
        );
    }
    return(
        <div>
            <h1>User</h1>
            <h2>Example of a functional component</h2>
            <Nested/>
            {/* also can be used as {Nested()} */}
        </div>
    );
}
// Class component
export class Member extends Component{
    render(){
    return(
        <div>
            <h2>This is Class component</h2>
        </div>
    )
    }
}