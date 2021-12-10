import { useState } from "react";
//import { Component } from "react";
//import EventPro from "./EventPractice/EventPractice";
//import Click from "./EventPractice/clickcounter/parents";
//import Click2 from "./EventPractice/clickcounter2/parents";
//import ValidationSample from "./chapter5/ValidationSample";
//import ScrollBox from "./chapter5/ScrollBox";
//import IterationSample from "./chapter6/IterationSample";
//import LifeCycleSample from "./chapter7/LifeCycleSample";
//import ErrorBoundary from "./chapter7/ErrorBoundary";
//import Counter from "./chapter8/Counter";
import Info from "./chapter8/Info";

const App = () => {
  const [visible, setvisible] = useState(true);
  const handleClick = () => {
    setvisible(!visible);
  };

  return (
    <div>
      <button onClick={handleClick}>{visible ? "숨기기" : "보이기"}</button>
      <br></br>
      {visible && <Info />}
    </div>
  );
};

export default App;
