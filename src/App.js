import { Component } from "react";
//import EventPro from "./EventPractice/EventPractice";
//import Click from "./EventPractice/clickcounter/parents";
//import Click2 from "./EventPractice/clickcounter2/parents";
//import ValidationSample from "./chapter5/ValidationSample";
//import ScrollBox from "./chapter5/ScrollBox";
//import IterationSample from "./chapter6/IterationSample";
import LifeCycleSample from "./chapter7/LifeCycleSample";
import ErrorBoundary from "./chapter7/ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
