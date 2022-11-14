import React, { Component } from 'react'
import Test from './Test';
import TestPropsUpdate from './TestPropsUpdate';

export class Cdc extends Component {
    componentDidCatch(error,info){
        console.log("xeta");
        console.log(error);
        console.log(info);
    }
  render() {
    console.log('render');
    return (
      <div>
       <TestPropsUpdate slama='ajbvcjh'/>
      </div>
    )
  }
}

export default Cdc