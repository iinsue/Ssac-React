import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({
      name,
      nickname,
    }); //단축속성명 ( name: name, nickname: nickname) 을 이름이 동일하므로 생략한것.
    return () => {
      console.log("cleanup");
    };
  }, [name, nickname]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={onChangeName} placeholder="Name" />
      <input
        value={nickname}
        onChange={onChangeNickName}
        placeholder="Nickname"
      />
      <div>
        <h2>이름: {name}</h2>
        <h2>닉네임: {nickname}</h2>
      </div>
    </div>
  );
};

export default Info;
