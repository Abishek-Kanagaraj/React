import Message, { MyButton } from "./list";
import { ListGroup } from "./list";
import { Welcome } from "./props";
import PackingList from "./conditionalRendering";
export default function list() {
  return (
    <>
      <Message />
      <ListGroup />
      <MyButton />
      <Welcome name="Abishek"/>
      <PackingList/>
    </>

  )
}