import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };

  handlerChange = (e) => {
    // 계산된 속성명
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerClick() {
    this.setState({ message: "", username: "" });
  }

  handlerKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handlerClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="입력해 보세요"
          value={this.state.message}
          onChange={this.handlerChange}
          onKeyPress={this.handlerKeyPress}
        />
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handlerChange}
          onKeyPress={this.handlerKeyPress}
        />
        <h2> message : {this.state.message} </h2>
        <h2> username : {this.state.username} </h2>
        <button onClick={this.handlerClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
