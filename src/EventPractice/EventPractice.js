import { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    message: "",
    username: "",
  });

  // 객체 비구조화를 토해 상태변수 form의 값을 message와 username 변수에 할당
  const { message, username } = form;

  const handlerChange = (e) => {
    //전개 연산자를 이용해서 객체 사본을 생성하고 그 사본에 반영
    const newForm = { ...form, [e.target.name]: e.target.value };

    // 세터함수를 이용해서 사본을 저장(반영)
    setForm(newForm);
    console.log(form);
  };

  const handlerClick = () => {
    const newForm = { message: "", username: "" };
    setForm(newForm);
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
