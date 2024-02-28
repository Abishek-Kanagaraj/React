import React from "react";

function Button(props,children){
    console.log('Renders - ',children)
    return(
        <>
        <button onClick={props.handleClick}>{children}
        </button>
        </>
    );
}
export default React.memo(Button)