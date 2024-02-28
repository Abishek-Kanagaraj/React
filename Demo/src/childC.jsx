import { UserContext } from "./Context";
export default function ChildC(){
    return(
        <>
        <h1>Component C</h1>
        <UserContext.Consumer>
            {
                (user)=>{
                    return <h2>User Context value {user}</h2>
                }
            }
        </UserContext.Consumer>
        </>
    );
}