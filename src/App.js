import React from "react";
import PropTypes from "prop-types";

// component area

// supported component area - map

// main app area

class App extends React.Component {
  state = {
    // Data can be changed in this area
    count: 0,
  };
  add = () => {
    console.log("add");
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log("minus");
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
