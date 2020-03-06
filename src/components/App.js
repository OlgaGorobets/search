import React, { Component } from "react";
import { Button, Container , Row} from 'react-bootstrap';
import { Route,Link,withRouter } from 'react-router-dom';

import '../styles/App.scss';

class App extends Component {
    constructor(props) {
        super(props);
		this.state = { };
				
    }	
	componentDidMount(){  
	}	
    render() {		
        return (
			<>					
				<div>Hello!</div>
			</>
        );
    }
}

export default App;