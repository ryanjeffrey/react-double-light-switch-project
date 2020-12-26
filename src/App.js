import React, { Component } from "react";
import Switch from "./Switch";

class App extends Component {
  state = { on: false };
  toggle = () => {
    var isOn = this.state.on;
    this.setState({ on: !isOn });
  };
  render() {
    var wallClass = "wall off";
    if (this.state.on) {
      wallClass = "wall on";
    }
    return (
      <div className={wallClass}>
        <Switch />
        <Switch />
      </div>
    );
  }
}

export default App;
