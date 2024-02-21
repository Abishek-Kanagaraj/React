import Message, { MyButton } from "./list";
import { ListGroup } from "./list";
import { Welcome } from "./props";
import PackingList from "./conditionalRendering";
import User, {Member} from "./Component";
import Form from "./Events";
import Increment from "./state";
import Computer,{Device} from "./demo";
import { Develop } from "./demo";
export default function list() {
  return (
    <>
      <Message />
      <ListGroup />
      <MyButton />
      <Welcome name="Abishek"/>
      <PackingList/>
      <User/>
      <Member/>
      <Form/>
      <Increment/>
    </>

  )
}