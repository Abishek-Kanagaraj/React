import {BrowserRouter as Router} from "react-router-dom"

import Message, { MyButton } from "./list";
import { ListGroup } from "./list";
import Welcome from "./Props/props";
import PackingList from "./conditionalRendering";
import User, { Member } from "./component";
import Form from "./Events";
import Increment from "./State/state";
import Computer, { Device } from "./demo";
import { Develop } from "./demo";
import Update from "./State/stateInClass";
import Student from "./Props/propsInClass";
import Input from "./inputEvent";
import Example from "./LifeCycle/mount";
import DidUpdate from "./LifeCycle/update";
import UnMount from "./LifeCycle/unMount";
import UseEffect from "./UseEffect/useEffect";
import Pure from "./pureComponent";
import UseMemo from "./useMemo";
import Bind from "./bind";
import Ref from "./UseRef/ref";
import UseRef from "./UseRef/useRef";
import Parent from "./UseRef/parentComponent";
import UseCallback from "./UseCallback/useCallback";
import Toggle from "./UseEffect/toogle";
import DataFetching from "./UseEffect/dataFetching";
import Context from "./UseContext/Context";
import UseReducer from "./UseReduce/useReducer";
import ComplexReducer from "./UseReduce/complexReducer";
import CustomHook from "./CustomHooks/customHook";
import SampleForm from "./sampleForm";
import ListKeys from "./listKeys";
import LiftStateUp from "./liftStateUp";
import Names from "./ErrorBoundaries/names"
import ErrorBoundary from './ErrorBoundaries/errorBoundary';
import ClickCounter from '../src/HOC/clickCounter'
import HoverCounter from '../src/HOC/hoverCounter'
import Routing from "./Routing/routing";
import DynamicRouting from "./Routing/dynamicRouting";


export default function App() {
  return (
    <>
      {/* <Increment/>
      <Welcome name={"Abishek"}/>
      <Update/>
      <Student name={"Abishek"}/>
      <tr/>
      <Input/>
      <tr/>
      <Example/>
      <DidUpdate/>
      <UnMount/>
      <UseEffect/>
      <Pure/>
      <UseMemo/>
      <Bind /> */}
      {/* <Ref/>
      <UseRef /> */}
      {/* <Parent/>
      <UseCallback />
      <Toggle /> */}
      {/* <DataFetching/>
      <Context/> */}
      {/* <UseReducer />
      <ComplexReducer/> */}
      {/* <CustomHook /> */}
      {/* <SampleForm /> */}
      {/* <ListKeys /> */}
      {/* <LiftStateUp />
      <ErrorBoundary>
        <Names name="Manoj" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Names name="Sherjeel" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Names name="Abishek" />
      </ErrorBoundary> */}
      {/* <HoverCounter />
      <ClickCounter /> */}
      {/* <Router>
        <Routing />
      </Router> */}
      <DynamicRouting />


    </>

  )
}