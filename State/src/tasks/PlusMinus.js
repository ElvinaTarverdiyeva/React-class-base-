import React, { Component } from "react";

export class PlusMinus extends Component {
  state = {
    deyer: 0,
  };
  changeValue(d, e) {
    let a = this.state.deyer;
    if (d == "inc") {
      a++;
    } else {
      a--;
    }
    this.setState({ deyer: a });
    console.log(a);
  }
  render() {
    const { deyer } = this.state;
    return (
      <div>
        <p>{deyer}</p>
        <input
          type="text"
          value={deyer}
          onChange={(e) => this.setState({ deyer: Number(e.target.value) })}
        />
        <button onClick={this.changeValue.bind(this, "inc")}>+</button>
        <button onClick={this.changeValue.bind(this, "dec")}>-</button>
      </div>
    );
  }
}

export default PlusMinus;
