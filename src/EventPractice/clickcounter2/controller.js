// Controller 컴포넌트
const Controller = ({ up, down }) => {
  return (
    <div>
      <button onClick={up}>+1</button>
      <button onClick={down}>-1</button>
    </div>
  );
};

export default Controller;
