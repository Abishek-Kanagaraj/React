import ChildA from "./childA";
import { createContext } from "react";

export const UserContext=createContext()
export default function Context(){
    return(
        <>
        <UserContext.Provider value={"Abishek"}>
        <ChildA/>
        </UserContext.Provider>
        </>
    );
}