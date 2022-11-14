import React, { Component } from 'react'

export class Card extends Component {
    render() {
        const {array} = this.props;
        return (
            <div className='card'>
                <img src={array.strDrinkThumb} alt="" />
                <h2>Name:{array.strCategory} </h2>
            </div>
        )
    }
}

export default Card