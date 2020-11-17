import React, { Component } from "react";
import { Form, Button, Label, Input, Modal, Radio } from 'semantic-ui-react';
import web3 from "../ethereum/web3";
import medBlocks from '../ethereum/medBlocks';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "Sam",
      sex: "",
      aadharNumber: 112233,
      age: 18,
      bmi: "",
      bloodGroup: "",
      passCode: 123,
      modalOpen: false
    };
  }

  handleDoctor = async (event) => {
    event.preventDefault();
    // whatever you want to do when user submits a form
    const { username, sex, aadharNumber, age, bmi, bloodGroup, passCode } = this.state;
    const accounts = await web3.eth.getAccounts();
    console.log("Patient");
    await medBlocks.methods.AddNewPatient(username, sex, aadharNumber, age, bmi, bloodGroup, passCode).send({from: accounts[0]});
    console.log("Doctor");
    await medBlocks.methods.AddNewDoctor(username, sex, aadharNumber, age, bmi, bloodGroup, passCode).send({from: accounts[0]});
    alert("You are registered as a doctor and patient!")
  };

  handlePatient = async (event) => {
    event.preventDefault();
    // whatever you want to do when user submits a form
    const { username, sex, aadharNumber, age, bmi, bloodGroup, passCode } = this.state;
    const accounts = await web3.eth.getAccounts();
    console.log(" Only Patient");
    await medBlocks.methods.AddNewPatient(username, sex, aadharNumber, age, bmi, bloodGroup, passCode).send({from: accounts[0]});  
    alert("You are registered as a patient");
  };

  handleOpen = () => {
    this.setState({modalOpen: true})
  }

  handleClose = () => {
    this.setState({modalOpen: false})
  }

  render() {
    const { username, sex, aadharNumber, age, bmi, bloodGroup, passCode } = this.state;

    return (
          <div>
            <Form>
            <Label style={{marginTop: '0px'}} htmlFor="username">Username</Label>
            <br />
            <Input
              placeholder="Username"
               value={username}
              onChange={ event => {this.setState({ username: event.target.value})}}
              ></Input>             
            <br />
            
            <Label style={{marginTop: '20px'}}>Gender</Label>
            <br />
            <div style={{padding: '5px'}}></div>
            <div style={{display: 'flex'}}>
              <Radio
                label='Female'
                name='radioGroup'
                value='Female'
                checked={sex === 'Female'}
                onChange={(e, { value }) => {this.setState({sex: value})}}
              />
              <div style={{padding: '10px'}}></div>
              <Radio
                label='Male'
                name='radioGroup'
                value='Male'
                checked={sex === 'Male'}
                onChange={(e, { value }) => {this.setState({sex: value})}}
              />
              <div style={{padding: '10px'}}></div>
              <Radio
                label='Other'
                name='radioGroup'
                value='Other'
                checked={sex === 'Other'}
                onChange={(e, { value }) => {this.setState({sex: value})}}
              />
            </div>
            
            <Label style={{marginTop: '20px'}} htmlFor="Aadhar Card Number">Aadhar Card Number</Label>
            <br />
            <Input
              placeholder="Aadhar Card Number"
              value={aadharNumber}
              onChange={ event => {this.setState({ aadharNumber: event.target.value })}}
              ></Input>
            <br />
            <Label style={{marginTop: '20px'}} >Age</Label>
            <br/>
            <Input
              placeholder="Age"
              value={age}
              onChange={ event => {this.setState({age: event.target.value})}}
            />
            <br/>
            <Label style={{marginTop: '20px'}} >BMI</Label>
            <br/>
            <Input
              placeholder="BMI"
              value={bmi}
              onChange={ event => {this.setState({bmi: event.target.value})}}
            />
            <br/>
            <Label style={{marginTop: '20px'}}>Blood Group</Label>
            <br/>
            {/* <Dropdown
              placeholder="Select"
              fluid
              selection
              options={bloodGroupoptions}
              onChange = { event => {this.setState({bloodGroup: event.target.value})}}
            /> */}
            <Input 
              placeholder="Blood Group"
              value={bloodGroup}
              onChange={event => {this.setState({bloodGroup: event.target.value})}}
            />
            <br/>
            <Label style={{marginTop: '20px'}} htmlFor="username">Pass Code</Label>
            <br />
            <Input
              type="password"
              placeholder="Password"
              value={passCode}
              onChange={ event => {this.setState({ passCode: event.target.value})}}
            ></Input>
            <br />

            <Button primary onClick={this.handleOpen} style={{marginTop: '10px'}}>Confirm</Button>
            <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon
            >
              <Modal.Header>Are you a Doctor too?</Modal.Header>
              <Modal.Content>
                <Form>
                  <Label>Confirm if you are a doctor too</Label>
                  <Button color="green" onClick={this.handleDoctor}>Yes, Confirm</Button>
                  <Button color="red" onClick={this.handlePatient}>No</Button>
                </Form>
              </Modal.Content>
            </Modal>

            {/* <Button color="google plus" style={{marginTop: '10px'}}>Sign in</Button> */}
            
          </Form>
          </div>

    );
  }
}

export default Login;