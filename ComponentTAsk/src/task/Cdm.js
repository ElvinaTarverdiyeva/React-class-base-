import React, { Component } from "react";
import Test from "./Test";

export class Cdm extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    soz: "salam",
  };
  componentDidMount() {
    console.log("did mound");
    this.setState({ soz: 'asd' })
  }

  render() {
    console.warn("render");
    return (
      <div>
        <p>{this.state.soz}</p>
        <button
          onClick={() => {
            console.log("salam");
            this.setState({ soz: "sagol" });
          }}
        >
          click
        </button>
        <Test />
      </div>
    );
  }
}

export default Cdm;
