import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import Profile from '../patient/home';
import web3 from '../../ethereum/web3';
import medBlocks from '../../ethereum/medBlocks';

class DoctorDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            // doctoraddress: "",
            IsDelegatePatient: "",
            passcode: ""
        }
    }

    async componentDidMount() {
        const doctoraddress = this.props.match.params.id;
        const accounts = await web3.eth.getAccounts();
        const doctorDetails = await medBlocks.methods.getDoctorList(doctoraddress,accounts[0]).call();
        const patientDetails = await medBlocks.methods.getPatientInfo2(accounts[0]).call();
        this.setState({IsDelegatePatient: doctorDetails[3], passcode: patientDetails[1]});
    }

    onDelegate = async (event) => {
        const doctoraddress = this.props.match.params.id;
        const accounts = await web3.eth.getAccounts();
        await medBlocks.methods.delegatePatient(doctoraddress, this.state.passcode).send({from: accounts[0]});
        alert('You have given access to your medical records to the doctor')
    }

    onRevoke = async (event) => {

    }

    renderButton = () => {
        if(this.state.IsDelegatePatient){
            return(
                <Form onSubmit={this.onRevoke}>
                    <Button color="red" size="big">Revoke</Button>
                </Form>
            )
        } else{
            return(
                <Form onSubmit={this.onDelegate}>
                    <Button color="green" size="big">Allow</Button>
                </Form>
            )
        }
    }

    render(){
        return(
            <div>
                <div>
                <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center', color:'#012a4a'}}>Doctor's Profile</h1>
                <Profile address={this.props.match.params.id} />
                </div>
                <div style={{position: 'absolute', right: '400px', bottom: '40px'}}>
                    {this.renderButton()}
                </div>
            </div>
        );
    }
}

export default DoctorDetails;