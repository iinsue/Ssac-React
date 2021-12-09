// Child 컴포넌트
const Child = (number) => {
  return (
    <div>
      <h1>
        {number.bool === true ? "Count :" : "Total Count :"}
        {number.countNumber}
      </h1>
      <button onClick={number.up}>+1</button>
      <button onClick={number.down}>-1</button>
    </div>
  );
};

export default Child;
