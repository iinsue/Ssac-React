//DisPlay 컴포넌트
const Display = ({ bool, countNumber }) => {
  return (
    <div>
      <h1>
        {bool === true ? "Count :" : "Total Count :"}
        {countNumber}
      </h1>
    </div>
  );
};

export default Display;
