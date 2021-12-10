import { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto", // 스크롤바가 생성될수 있음
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px", //외부 DIV 보다 높이가 높음 = 스크롤바 생성
      background: "linear-gradient(white, black)",
    };
    return (
      <div style={style}>
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
