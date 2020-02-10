import React, { Component } from "react";
import "./clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      time: null
    };
  }

  render() {
    setTimeout(() => {
      let datetime = new Date();
      let dates =
        datetime.getDate() +
        " / " +
        (datetime.getMonth() + 1) +
        " / " +
        datetime.getFullYear();
      let times =
        datetime.getHours() +
        " : " +
        datetime.getMinutes() +
        " : " +
        datetime.getSeconds();
      this.setState({
        date: dates,
        time: times
      });
    });

    return (
      <div>
        <p className="date">{this.state.date}</p>
        <p className="time">{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
