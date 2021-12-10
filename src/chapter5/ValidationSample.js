import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false, // 검증 버튼 클릭 여부를 관리
    validated: false, // 패스워드가 "0000"과 일치하는지 여부를 관리
  };

  myinput = React.createRef();

  handleFocus = () => {
    this.myinput.current.focus();
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.myinput.focus();
  };

  render() {
    return (
      <>
        <div className="password">
          <label htmlFor="password">비밀번호 </label>
          <input
            className={
              this.state.clicked
                ? this.state.validated
                  ? "success"
                  : "failure"
                : ""
            }
            onChange={this.handleChange}
            id="password"
            type="password"
            placeholder="Password"
            ref={(ref) => (this.myinput = ref)}
          />
          <button onClick={this.handleButtonClick}>검증</button>
        </div>
      </>
    );
  }
}

export default ValidationSample;
