import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>카운터 : {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        Down
      </button>
    </div>
  );
};

export default Counter;
