import Message, { MyButton } from "./list";
import { ListGroup } from "./list";
import Welcome from "./props";
import PackingList from "./conditionalRendering";
import User, { Member } from "./Component";
import Form from "./Events";
import Increment from "./state";
import Computer, { Device } from "./demo";
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
import UseCallback from "./useCallback";
import Toggle from "./toogle";
import DataFetching from "./dataFetching";
import Context from "./Context";
import UseReducer from "./useReducer";
import ComplexReducer from "./complexReducer";
import CustomHook from "./customHook";
import SampleForm from "./sampleForm";
import ListKeys from "./listKeys";
import LiftStateUp from "./liftStateUp";
import Names from "./names"
import ErrorBoundary from './errorBoundary';
import ClickCounter from './clickCounter'
import HoverCounter from './hoverCounter'


export default function App() {
  return (
    <>
      {/* <Increment/>
      <Welcome name={"Abishek"}/>
      <Update/>
      <Student name={"Abishek"}/>
      <tr/>
      <Input/>
      <tr/> */}
      {/* <Example/> */}
      {/* <DidUpdate/> */}
      {/* <UnMount/> */}
      {/* <UseEffect/> */}
      {/* <Pure/> */}
      {/* <UseMemo/> */}
      {/* <Bind />
      <Ref/>
      <UseRef />
      <Parent/> */}
      <UseCallback />
      {/* <Toggle /> */}
      {/* <DataFetching/> */}
      {/* <Context/> */}
      {/* <UseReducer />
      <ComplexReducer/> */}
      {/* <CustomHook /> */}
      {/* <SampleForm /> */}
      {/* <ListKeys /> */}
      <LiftStateUp />
      <ErrorBoundary>
        <Names name="Manoj" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Names name="Sherjeel" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Names name="Abishek" />
      </ErrorBoundary>
      <HoverCounter />
      <ClickCounter />

    </>

  )
}