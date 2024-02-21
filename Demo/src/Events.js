export default function Form(){
    return(
        <div>
            <form onSubmit={(e)=>{e.preventDefault(); alert("Submitting");}}>
                <input type="text"/>
                <button>Submit</button>
            </form>
        </div>
    );
}