import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  clickHandle(thisone) {
    this.props.del(thisone);
  }
  render() {
    return (
      <div className="workDiv">
        <p
          onClick={() => {
            this.clickHandle(this.props.work);
          }}
          className="work"
        >
          {this.props.work}
        </p>
      </div>
    );
  }
}

export default Todo;
