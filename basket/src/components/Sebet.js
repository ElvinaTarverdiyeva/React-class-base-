import React, { Component } from "react";
import Card from "./Card";

export class Sebet extends Component {
  addItem(id, type, e) {
    let item = this.props.basket.find((e) => e.id == id);
    if (type == "inc") {
      item.count++;
    } else if (type == "dec") {
      item.count--;
      if (item.count <= 0) {
        let index = this.props.basket.findIndex((e) => e.id == id);
        this.props.basket.splice(index, 1);
      }
    }
    this.props.changeStateValue(this.props.basket);
    console.log(this.props.basket);
  }
  render() {
    const { basket } = this.props;
    // console.log(basket);
    return (
      <div>
        <h2>Sebet:</h2>
        {basket.map((e) => (
          <div>
            <p>Name:{e.name}</p>
            <p>Count:{e.count}</p>
            <p>Count:{e.price}</p>
            <button onClick={this.addItem.bind(this, e.id, "inc")}>+</button>
            <button onClick={this.addItem.bind(this, e.id, "dec")}>-</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Sebet;
