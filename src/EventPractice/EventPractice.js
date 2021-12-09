import { Component } from "react";

class EventPractice extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
    this.state = {
      message: "",
    };
  }

  handlerChange(e) {
    console.log(e.target.value);
    this.setState({ message: e.target.value });
  }

  handlerClick() {
    this.setState({ message: "" });
  }
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
        />
        <h2> 입력 내용 : {this.state.message} </h2>
        <button onClick={this.handlerClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
