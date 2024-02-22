import Message, { MyButton } from "./list";
import { ListGroup } from "./list";
import  Welcome  from "./props";
import PackingList from "./conditionalRendering";
import User, {Member} from "./Component";
import Form from "./Events";
import Increment from "./state";
import Computer,{Device} from "./demo";
import { Develop } from "./demo";
import Update from "./stateInClass";
import Student from "./propsInClass";
import Input from "./inputEvent";
export default function list() {
  return (
    <>
      <Increment/>
      <Welcome name={"Abishek"}/>
      <Update/>
      <Student name={"Abishek"}/>
      <tr/>
      <Input/>
    </>

  )
}