import { Component } from "react";
export default function Computer() {
    return (
        <div>
            <h1>Computer Component</h1>
        </div>
    );
}
export function Device() {
    return (
        <div>
            <h1>Device Component</h1>
        </div>
    );
}
export function Develop() {
    return (
        <div>
            <h1>Develop component</h1>
        </div>
    );
}

export class Person extends Component {
    render() {
        return (
            <div>
                <h2>Person Component</h2>
            </div>
        )
    }
}