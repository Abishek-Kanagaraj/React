import React from "react";

function Button({handleClick,children}){
    console.log('Renders - ',children)
    return(
        <>
        <button onClick={handleClick}>{children}
        </button>
        </>
    );
}
export default React.memo(Button)