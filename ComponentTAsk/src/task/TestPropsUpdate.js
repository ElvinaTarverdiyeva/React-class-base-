import React, { Component } from 'react'

export class TestPropsUpdate extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('child update->'+this.props.pcount);
        console.log(prevProps);

    }
    render() {
        return (
            <div>
                <p>Component did update {this.props.pcount}</p>
            </div>
        )
    }
}

export default TestPropsUpdate