import React, { Component } from "react";
import Todo from "./Todo";
import Form from "./Form";
import Clock from "./Clock";
import "./todos.css";

class Todos extends Component {
  constructor(props) {
    super(props);
    let storage;
    if (localStorage.works) {
      storage = JSON.parse(localStorage.works);
    } else {
      storage = [];
    }
    this.state = {
      // works: ["REACT JS", "Dinner", "Walk Dog"]
      // works: JSON.parse(localStorage.works) || null
      works: storage
    };
    // console.log(localStorage.works);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.delete = this.delete.bind(this);
  }

  onSubmitHandler(work) {
    let nstate = this.state.works;
    nstate.push(work);

    this.setState({
      works: nstate
    });

    let newStorage = [...this.state.works];
    localStorage.setItem("works", JSON.stringify(newStorage));
  }

  async delete(delthis) {
    // let news = [];
    // this.state.works.forEach(el => {
    //   if (el !== delthis) {
    //     news.push(el);
    //   }
    // })

    let ostate = this.state.works;

    let news = await ostate.filter(function(item) {
      return item !== delthis;
    });

    // console.log("news: " + news);

    this.setState({
      works: news
    });

    // console.log("state: " + this.state.works);
    // console.log("deleted" + this.state.works);

    let storage = localStorage.works;
    if (storage) {
      let newStorage = [...this.state.works];
      localStorage.setItem("works", JSON.stringify(newStorage));
    }
    // console.log("local: " + JSON.parse(localStorage.getItem("works")));
  }

  render() {
    let mapping = (
      <div>
        {this.state.works.map(work => {
          return <Todo del={this.delete} key={work} work={work} />;
        })}
      </div>
    );

    return (
      <div className="main">
        <h1 className="head">TODO</h1>
        <Clock />
        <div className="todoDiv">{mapping}</div>
        <Form onSubmitHandler={this.onSubmitHandler} />
      </div>
    );
  }
}

export default Todos;
