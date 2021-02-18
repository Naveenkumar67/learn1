import React, {Component, useState} from "react";

import he from "./he";

class App extends Component {
    constructor(props) {
		super(props);
	};
handle(){
<p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
	       
}
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
		    <he hand={this.handle}/>
    		</div>
    	);
    }
}


export default App;

