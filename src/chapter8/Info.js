import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <input name="name" value={name} onChange={onChange} placeholder="Name" />
      <input
        name="nickname"
        value={nickname}
        onChange={onChange}
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
