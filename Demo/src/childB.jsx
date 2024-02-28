import { useContext } from "react";
import ChildC from "./childC";
import { UserContext } from "./Context";

export default function ChildB(){

    const user= useContext(UserContext)

    return(
        <>
        <h1>Component B's {user}</h1>
        <ChildC />
        </>
    );
}