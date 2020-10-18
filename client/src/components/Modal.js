import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Login from "./Login";

class PostsList extends Component {
  state = {
    modalOpen: false,
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
       <div>
          <Button color="google plus" style={{marginTop: "-15px "}} onClick={this.handleOpen}>{this.props.value}</Button>
          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon
          >
            <Modal.Header>Sign In</Modal.Header>
            <Modal.Content>
              <Login handleClose={this.handleClose} signin={this.props.signin} />
            </Modal.Content>
          </Modal>
        </div>
     )
   }
}

export default PostsList;