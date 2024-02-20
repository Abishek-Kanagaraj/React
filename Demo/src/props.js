export function Welcome(props){
    
    return (
        <>
        <h1>Welcome, {props.name}!</h1>
        <button className="button">Click to continue</button>
        </>
    );
}