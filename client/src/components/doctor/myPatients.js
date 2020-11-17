import React, {Component} from 'react';
import web3 from '../../ethereum/web3';
import medBlocks from '../../ethereum/medBlocks';
import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import patientLogo from '../../img/patient-logo.jpg';
import SearchBar from '../SearchBar';

class MyPatients extends Component{
    constructor(props){
        super(props);
        this.state = {
            patientAddressArray: [],
            len: "",
            doctoraddress: "",
            myPatientsArray: [], //store bool
            patientObjectArray: []
        }
    }
    Patients = async () => {
        const accounts = await web3.eth.getAccounts();
        let myPatientsArray = [];
        const patientAddressArray = await medBlocks.methods.getPatientAddressArray().call();
        const len = patientAddressArray.length;
        let patientObjectArray = [];
        for(let i=0;i<len;i++){
            try{
                let isDelegate = await medBlocks.methods.PatientIsDelegate(accounts[0],patientAddressArray[i]).call();
                myPatientsArray.push(isDelegate);
                const details = await medBlocks.methods.getPatientInfo1(patientAddressArray[i]).call();
                patientObjectArray.push({
                    id: details[0],
                    name: details[1],
                    address: patientAddressArray[i]
                })
            }catch(err){
                alert('Error Occured!')
            }
        }

        this.setState({
            patientAddressArray,
            len,
            doctoraddress: accounts[0],
            myPatientsArray,
            patientObjectArray
        });
    }

    componentDidMount() {
        this.Patients();
    }

    renderList(){
        let c = 0;
        const items = this.state.patientObjectArray.map( patient => {
            if(this.state.myPatientsArray[c++]){
                return{
                    header: patient.name,
                    // meta: patient.id,
                    description: (<Link to={`/loggedIn/my_patients/${patient.address}/patientDetails`}>View Patient details</Link>),
                    // fluid: true,
                    image: <Image src={patientLogo} style={{width: '500px'}} size="small" />,
                    style: {overflowWrap: 'break-word'}
                }
            } else{
                return {
                    header: "Not patient",
                    meta: "Bug will be fixed soon!"
                }
            }
        });
        return <Card.Group items={items} />
    }
    
    render(){
        return(
            // <div className="records">
            <div style={{paddingLeft: "400px", paddingRight: "150px"}}>
                <div style={{padding: '0px 80px 10px 80px'}}>
					<SearchBar category="Patient" />
				</div>
                <h2 style={{color: '#012a4a'}}>My Patients</h2>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default MyPatients;