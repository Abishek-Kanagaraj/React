export default function Message() {
    const uname = "Abishek";
    return <h1>Hi {uname}</h1>;
  }
  export function MyButton() {
    return <button>I'm a button</button>;
  }
  const lists = ["Abishek", "Kangaraj"];
  const items = lists.map((item,index) => <li onClick={() => console.log(item,index)}  key={item}>{item}</li>);
  export function ListGroup() {
    return (
      <>
        <h1>List items</h1>
        <ul class="list-group">{items}</ul>
      </>
    );
  }