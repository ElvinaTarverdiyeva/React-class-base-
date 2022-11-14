import React, { Component } from "react";

export class State extends Component {
  state = {
    // text: "salam",
    inputText: "",
    inpValue: "",
  };
  changeText() {
    console.log(this.state.inpValue);
    this.setState({
      inputText: this.state.inpValue,
    });
  }
  render() {
    const inp1 = (e) => {
      //   this.setState({
      //     inputText: e.target.value,
      //   });
      this.setState({
        inpValue: e.target.value,
      });
    };
    const { inputText } = this.state;
    return (
      <div>
        {/* <p>{this.state.text}</p> */}
        {/* <p>{text}</p> */}
        <input type="text" onChange={inp1} />
        <button onClick={this.changeText.bind(this)}>Change Text</button>
        <p>{inputText}</p>
      </div>
    );
  }
}

export default State;
