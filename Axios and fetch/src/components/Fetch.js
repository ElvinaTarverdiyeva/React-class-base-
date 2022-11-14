import React, { Component } from 'react'
import Card from './Card';

export class Fetch extends Component {
    state = {
        drinkArray: []
    }
    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
            .then(rep => rep.json())
            .then(data => {
                this.setState({
                    drinkArray: data.drinks
                })
            })
    }
    render() {
        const { drinkArray } = this.state;
        console.log(drinkArray);
        return (
            <div className='grid_container'>
                {drinkArray.map(data => (<Card array={data} />))}
            </div>
            
        )
    }
}

export default Fetch