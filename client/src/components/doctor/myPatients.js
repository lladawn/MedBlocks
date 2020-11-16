import React, {Component} from 'react';
import web3 from '../../ethereum/web3';
import medBlocks from '../../ethereum/medBlocks';
import { Card, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import user from '../../img/user-logo.png';
import SearchBar from '../SearchBar';

class MyPatients extends Component{
    constructor(props){
        super(props);
        this.state = {
            patientAddressArray: [],
            len: "",
            doctoraddress: "",
            myPatientsArray: [] //store bool

        }
    }
    Patients = async () => {
        const accounts = await web3.eth.getAccounts();
        let myPatientsArray = [];
        const patientAddressArray = await medBlocks.methods.getPatientAddressArray().call();
        const len = patientAddressArray.length;
        for(let i=0;i<len;i++){
            try{
                let isDelegate = await medBlocks.methods.PatientIsDelegate(accounts[0],patientAddressArray[i]).call();
                myPatientsArray.push(isDelegate);
            }catch(err){
                alert('Error Occured!')
            }
        }

        this.setState({
            patientAddressArray,
            len,
            doctoraddress: accounts[0],
            myPatientsArray
        });
    }

    componentDidMount() {
        this.Patients();
    }

    renderList(){
        let c = 0;
        const items = this.state.patientAddressArray.map( address => {
            if(this.state.myPatientsArray[c++]){
                return{
                    header: address,
                    description: (<Link to={`/loggedIn/my_patients/${address}/patientDetails`}>View Patient details</Link>),
                    fluid: true,
                    image: <Image src={user} style={{width: '100px'}} size="tiny" />
                }
            } else{
                return "";
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