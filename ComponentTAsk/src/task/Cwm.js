import React, { Component } from 'react'

export class Cwm extends Component {
    constructor(){
        super();
        console.log('constructor');
    }
    state={
        ad:'eli'
    }
    componentWillMount(){
        console.log('will mound');
        this.setState({ad:'ela'})
    }
  render() {
    console.log('render');
    return (
      <div>
        <p>{this.state.ad}</p>
        <button onClick={()=>{this.setState({ad:'huseyn'})}}>click</button>
      </div>
    )
  }
}

export default Cwm