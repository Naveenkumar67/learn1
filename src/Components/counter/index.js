import React, { Component } from 'react';

class CounterValue extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <h1>
                {this.props.currentCounter}
            </h1>
        );
    }
}

export default CounterValue;