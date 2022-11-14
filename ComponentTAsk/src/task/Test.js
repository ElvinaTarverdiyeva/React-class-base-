import React, { Component } from 'react'

export class Test extends Component {
    constructor(){
        super();
        console.log("test constructor");
    }
    componentDidMount() { 
        console.log('textCmp');
     }
  render() {
    console.log('testrender');
    return (
      <div>Test</div>
    )
  }
}

export default Test