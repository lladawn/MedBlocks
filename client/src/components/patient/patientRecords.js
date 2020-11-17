import React, {Component} from 'react';
import Record from './myRecords';

class PatientRecord extends Component{
    render(){
        return(
            <Record patientAddress={this.props.match.params.id} />
        )
    }
}

export default PatientRecord;