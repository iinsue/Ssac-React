import { useState } from "react";
import Controller from "./controller";
import Display from "./display";

// Parent 컴포넌트
const Parent = () => {
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [bool, setBool] = useState(true);

  // Parents Total Count & Reset
  const onTotalCount = () => {
    setCount(totalCount);
    setBool(!bool);
  };
  const onReset = () => {
    setCount(0);
    setBool((bool) => true);
  };

  // Child Up Down
  const onClickUp = () => {
    setCount((count) => count + 1);
    setTotalCount((totalCount) => totalCount + 1);
  };
  const onClickDown = () => {
    setCount((count) => count - 1);
    setTotalCount((totalCount) => totalCount + 1);
  };

  return (
    <div>
      <Display bool={bool} countNumber={count} />
      <Controller up={onClickUp} down={onClickDown} />
      <button onClick={onTotalCount}>Total Count</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Parent;
