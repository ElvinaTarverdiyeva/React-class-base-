import React, { Component } from "react";

export class Onchange extends Component {
  render() {
   const inp1 = (e) => {
      console.log(e.target.value);
    };
    return (
      <div>
        <input type="text" onChange={inp1} />
      </div>
    );
  }
}

export default Onchange;
