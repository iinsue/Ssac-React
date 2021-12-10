import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 부여할 id

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleAddItem = () => {
    const addNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNames(addNames);
    setNextId(nextId + 1);
    setInputText("");
  };
  const handleRemove = (id) => {
    const addNames = names.filter((name) => name.id !== id);
    setNames(addNames);
  };
  const nameList = names.map((name) => (
    <li onDoubleClick={() => handleRemove(name.id)} key={name.id}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleAddItem}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
