import React, { Component } from "react";

export class Onclick extends Component {
//   arrowFunc = () => {
//     console.log("bye");
//   };
//   bindFunc() {
//     console.log("bind");
//   }
  bindFunc(e,soz) {
    console.log(e);
  }
  render() {
    return (
      <div>
        {/* <button
          onClick={() => {
            console.log("salam");
          }}
        >
          Click1
        </button>
        <button onClick={this.arrowFunc}>Click2</button>
        <button onClick={this.bindFunc.bind(this)}>Click3</button> */}
         <button
          onClick={(event) => {
            event.target.innerText="salam"
            console.log(event.target.innerText);
          }}
        >
          Click1
        </button>
        <button onClick={this.bindFunc.bind(this,"sagol")}>Click3</button>
      </div>
    );
  }
}

export default Onclick;
