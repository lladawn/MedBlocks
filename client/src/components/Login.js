import React, { Component } from "react";
import { Form, Button, Label, Input, Modal } from 'semantic-ui-react';
import web3 from "../ethereum/web3";
import medBlocks from '../ethereum/medBlocks';
import Main from './patient/main.js';

class Login extends Component {
  state = {
    username: "",
    aadharNumber: "",
    passCode: "",
    modalOpen: false
  };

  handleDoctor = async (event) => {
    event.preventDefault();
    // whatever you want to do when user submits a form
    const { username, aadharNumber, passCode } = this.state;
    const accounts = await web3.eth.getAccounts();
    console.log("Patient");
    await medBlocks.methods.AddNewPatient(username, aadharNumber, passCode).send({from: accounts[0]});
    console.log("Doctor");
    await medBlocks.methods.AddNewDoctor(username, aadharNumber, passCode).send({from: accounts[0]});
  };

  handlePatient = async (event) => {
    event.preventDefault();
    // whatever you want to do when user submits a form
    const { username, aadharNumber, passCode } = this.state;
    const accounts = await web3.eth.getAccounts();
    console.log(" Only Patient");
    await medBlocks.methods.AddNewPatient(username, aadharNumber, passCode).send({from: accounts[0]});
    /*<Main /> */

  };

  handleOpen = () => {
    this.setState({modalOpen: true})
  }

  handleClose = () => {
    this.setState({modalOpen: false})
  }

  render() {
    const { username, aadharNumber, passCode } = this.state;

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
            <Label style={{marginTop: '20px'}} htmlFor="Aadhar Card Number">Aadhar Card Number</Label>
            <br />
            <Input
              placeholder="Aadhar Card Number"
              value={aadharNumber}
              onChange={ event => {this.setState({ aadharNumber: event.target.value })}}
              ></Input>
            <br />
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