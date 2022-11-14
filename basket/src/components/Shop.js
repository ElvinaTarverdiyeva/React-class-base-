import React, { Component } from 'react'
import data from '../data.json';
import Card from './Card';
import Sebet from './Sebet';
export class Shop extends Component {
    state = {
        basket: [
        ]
    }
    changeStateValue = (data)=>{
        this.setState({
            basket: data
        })
    }
    render() {
        const { basket } = this.state;
        // console.log(basket);
        return (
            <div>
                {data.map(e =>
                    <Card changeStateValue={this.changeStateValue} basket={basket} product={e}  />
                )}

                <Sebet changeStateValue={this.changeStateValue} basket={basket} />
            </div>
        )
    }
}

export default Shop