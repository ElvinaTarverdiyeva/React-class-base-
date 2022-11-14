import React, { Component } from "react";

export class Card extends Component {
  AddBasket() {
    let item = this.props.basket.find((e) => e.id == this.props.product.id);
    let index = this.props.basket.findIndex(
      (e) => e.id == this.props.product.id
    );

    if (item) {
      item.count += 1;
      this.props.basket[index] = item;
    } else {
      let newItem = {
        id: this.props.basket.length + 1,
        name: this.props.product.name,
        count: 1,
        price: this.props.product.price,
      };
      this.props.basket.push(newItem);
      //   this.setState({});
    }
    this.props.changeStateValue(this.props.basket);
  }

  render() {
    const { product } = this.props;
    // console.log(this.props);
    return (
      <div key={product.id}>
        <p>Name:{product.name}</p>
        <p>Price:{product.price}</p>
        <button onClick={this.AddBasket.bind(this)}>Add</button>
      </div>
    );
  }
}

export default Card;
