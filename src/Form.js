import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  state = {
    todo: ""
  };

  render() {
    let onChangeHandler = event => {
      this.setState({
        todo: event.target.value
      });
    };

    let onSubmit = event => {
      event.preventDefault();
      if (
        this.state.todo.trim() === "" ||
        this.state.todo === "" ||
        this.state.todo === " "
      ) {
      } else {
        this.props.onSubmitHandler(this.state.todo);
        this.setState({ todo: "" });
      }
    };

    return (
      <div className="formDiv">
        <form onSubmit={onSubmit}>
          <input
            value={this.state.todo}
            onChange={onChangeHandler}
            placeholder="ENTER TODO"
            name="todoInput"
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}

export default Form;
