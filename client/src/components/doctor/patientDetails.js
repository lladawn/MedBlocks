import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import Profile from '../patient/home';
// import web3 from '../../ethereum/web3';
// import medBlocks from '../../ethereum/medBlocks';
import {Link} from 'react-router-dom';

class PatientDetails extends Component{
    render(){
        return(
            <div>
                <div>
                <h2 style={{display: 'flex', justifyContent:'center', alignItems:'center', color:'#012a4a', paddingLeft: '250px'}}>Patient's Profile</h2>
                <Profile address={this.props.match.params.id} />
                </div>
                <div style={{position: 'absolute', right: '400px', bottom: '20px'}}>
                    <Link to={`/loggedIn/my_patients/${this.props.match.params.id}/patientDetails/addRecord`}>
                        <Button secondary size="big" >
                            <i className="plus icon"></i>
                            Add Record
                        </Button>
                    </Link>
                    
                </div>
                <div style={{position: 'absolute', right: '345px', bottom: '80px'}}>
                    <Link to={`/loggedIn/my_patients/${this.props.match.params.id}/patientDetails/records`} >
                        <Button secondary size="big">
                            View Past Records
                            <i className="angle double right icon"></i>
                        </Button>
                    </Link>
                </div>
                
            </div>
        );
    }
}

export default PatientDetails;