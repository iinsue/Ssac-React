import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const handlerChange = (e) => {
    if (e.target.name === "message") {
      setMessage(e.target.value);
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
    }
  };

  const handlerClick = () => {
    setMessage("");
    setUsername("");
  };

  const handlerKeyPress = (e) => {
    if (e.key === "Enter") {
      handlerClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="입력해 보세요"
        value={message}
        onChange={handlerChange}
        onKeyPress={handlerKeyPress}
      />
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={handlerChange}
        onKeyPress={handlerKeyPress}
      />
      <h2> message : {message} </h2>
      <h2> username : {username} </h2>
      <button onClick={handlerClick}>확인</button>
    </div>
  );
};

export default EventPractice;
