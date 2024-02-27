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
import Example from "./Mount";
import DidUpdate from "./Update";
import UnMount from "./unMount";
import UseEffect from "./useEffect";
import Pure from "./pureComponent";
import UseMemo from "./useMemo";
import Bind from "./bind";
import Ref from "./ref";
import UseRef from "./useRef";
import Parent from "./parentComponent";
export default function App() {
  return (
    <>
      <Increment/>
      <Welcome name={"Abishek"}/>
      <Update/>
      <Student name={"Abishek"}/>
      <tr/>
      <Input/>
      <tr/>
      {/* <Example/> */}
       {/* <DidUpdate/> */}
      {/* <UnMount/> */}
      <UseEffect/>
      {/* <Pure/> */ }
      {/* <UseMemo/> */}
      {/* <Bind />
      <Ref/>
      <UseRef />
      <Parent/> */}


    </>

  )
}