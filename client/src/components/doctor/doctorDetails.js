import React, {Component} from 'react';
import Profile from '../patient/home';

class DoctorDetails extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Doctor Profile</h1>
                <Profile address={this.props.match.params.id} />
            </div>
        );
    }
}

export default DoctorDetails;