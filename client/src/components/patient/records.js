import React, { Component} from 'react';
import '../../css/records.css';
import ScriptTag from 'react-script-tag';
import {Button, Collapse} from 'react-bootstrap'

class Record extends Component{	
	state={ 
        open:false
	};	
	
    render(){
		return (
			<div className = 'records'>
			<h1>RECORDS </h1>
			<div className = "major">
				<h2>MAJOR DISEASES</h2>
				<Button type="button" class="disease 1" /*onClick = {!this.state.open}*/>Dengue</Button>
					<Collapse ><div class="content-plain 1">
					kdkjsdk

					</div> 
					</Collapse>
					/*<button type="button" class="disease 2" onClick = {!this.state.open}>Malaria</button>
					<Collapse in={this.state.open}><div class="content-plain 2">
						<a href="./index.js" target= "blank">resume.pdf</a>
					</div> 
					</Collapse>*/
			</div>
			<div className = "minor">
			</div>	
			</div>
		);
	}
}

export default Record;