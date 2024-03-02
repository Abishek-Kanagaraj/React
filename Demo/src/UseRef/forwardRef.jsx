import { forwardRef } from "react";
 function User(props,ref){
    return(
        <>
        <input ref={ref} type="text" />
        </>
    );
}
export default forwardRef(User);
