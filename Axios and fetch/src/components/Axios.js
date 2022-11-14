import React, { Component } from 'react'
import axios from "axios";
import Card from './Card';
const base_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
export class Axios extends Component {
    state={
        drinkArray:[]
    }
    componentDidMount() {
        axios.get(base_url)
            .then(res => res.data)
            .then(data => {
                this.setState({drinkArray:data.drinks})
            })
    }
    render() {
        const { drinkArray } = this.state;
        // console.log(drinkArray);
        return (
            <div className='grid_container'>
                {drinkArray.map(data => (<Card array={data} />))}
            </div>
            
        )
    }
}

export default Axios