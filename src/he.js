import React, { Component } from 'react';
import './App.css';


class he extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.hand}>Paragraph</button>
            </div>
        );
    }
}

export default he;