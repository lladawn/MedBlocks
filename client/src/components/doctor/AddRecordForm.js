import React, { Component } from 'react';
import web3 from '../../ethereum/web3';
import medBlocks from '../../ethereum/medBlocks';
import { Form, Input, Button } from 'semantic-ui-react';
import ipfs from '../../ethereum/ipfs';

class AddRecord extends Component {
    constructor(props){
        super(props);
        this.state={
            expense: 0,
            diseases: '',
            medicineName: '',
            ipfsHash:null,
            buffer:'',
            address: ''
        };
    }
    
    componentDidMount() {
        const address = this.props.match.params.id;
        this.setState({address});
    }

    captureFile = (event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };
    
    convertToBuffer = async (reader) => {
        const buffer = await Buffer.from(reader.result);
        this.setState({buffer});
    };

    onSendIpfs = async (event) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
       
        console.log('Sending from Metamask account: ' + accounts[0]);
        await ipfs.add(this.state.buffer, (err, ipfsHash) => {
          alert("Report uploaded(Hash Value): " + ipfsHash[0].hash);
          console.log(err,ipfsHash);
          this.setState({ ipfsHash:ipfsHash[0].hash });
        }) 
      }; 

    
    onSubmit = async (event) => {
        event.preventDefault();
        try{
            const accounts = await web3.eth.getAccounts();
            alert(`Adding a record to ${accounts[0]}`)
            await medBlocks.methods.AddPatientMeetingInfo(
                this.state.address,
                this.state.diseases,
                this.state.expense,
                this.state.medicineName,
                this.state.ipfsHash
            ).send({
                from:accounts[0]
            });
            alert("Meeting added successfully!");
        }catch(err){
            alert(`Please add a value, or the transaction has been rejected by the user! \n Error: ${err}`);
        }
    };

    render(){
        return(
            <div>
                <div className="break"></div>
                <h1 style={{paddingLeft: '250px', color: '#012a4a'}}>Add Patient's Record</h1>
                <div className="break"></div>
                <div className="record">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <Input 
                                value={this.state.diseases}
                                onChange={event => this.setState({diseases: event.target.value})}
                                label="Disease caused" 
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input 
                                value={this.state.medicineName}
                                onChange={event => this.setState({medicineName: event.target.value})}
                                label="Medicines prescribed" 
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input 
                                value={this.state.expense}
                                onChange={event => this.setState({expense: event.target.value})}
                                label="Treatment cost" 
                            />
                        </Form.Field>


                        <Button color="green">
                            Add Meeting
                        </Button>
                    </Form>
                </div>
                <div className="break"></div>
                <div className="record">
                    <Form onSubmit={this.onSendIpfs}>
                        <div style={{display: 'flex'}}>
                            <h3> Choose file to send to IPFS </h3>
                            <i className="large file alternate icon"></i>
                        </div>
                        <Form.Field>
                            <Input 
                                type = "file"
                                onChange = {this.captureFile}
                            />
                        </Form.Field>
                        
                        <br/>
                        <Button 
                            secondary 
                            type="submit"
                        > 
                            Upload Medical Report <space/>
                            <i className=" file alternate icon"></i>
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default AddRecord;