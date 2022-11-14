import React, { Component } from 'react'
import TestPropsUpdate from './TestPropsUpdate';

export class Cdu extends Component {
    state = {
        count: 0
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('update->' + prevState.count);
      
        // if (this.state.count < 5) {
        //     this.setState({ count: this.state.count + 1 })
        // }
    }
    // shouldComponentUpdate(prevProps, prevState) {
    //     console.log('Supdate->' + prevState.count);
      
    //     // if (this.state.count < 5) {
    //     //     this.setState({ count: this.state.count + 1 })
    //     // }
    // }
    
    render() {
        console.log('salam');
        return (
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Plus {this.state.count}</button>
                {/* <TestPropsUpdate pcount={this.state.count} /> */}

            </div>
        )
    }
}

export default Cdu