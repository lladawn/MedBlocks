import React, { Component} from 'react';
import '../../css/records.css';
// import ScriptTag from 'react-script-tag';
// import {Button, Collapse} from 'react-bootstrap'

class Record extends Component{	
	state={ 
        open:false
	};	
	
    render(){
		return (
			<div className = 'records'>
			<h1>Medical Records</h1>
			<div className="major">
				<h1>Meeting</h1>
			</div>
			<div className="minor">
			</div>	
			</div>
		);
	}
}

export default Record;