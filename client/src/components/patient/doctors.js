import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import user from '../../img/user-logo.png';
import { Link } from 'react-router-dom';
import medBlocks from '../../ethereum/medBlocks';
import web3 from '../../ethereum/web3';

class DoctorList extends Component{
	constructor(props){
		super(props);
		this.state = {
			doctorList: []
		};
	}

	doctorList = async () => {
        const doctorList = await medBlocks.methods.getDoctorAddressArray().call();
		const len = doctorList.length;
		this.setState({doctorList});
	}
	
    componentDidMount(){
        this.doctorList();
	}
	
	renderList = () => {
		// const accounts = await web3.eth.getAccounts();
		const items = this.state.doctorList.map(address => {
			// const details = await medBlocks.methods.getDoctorList(address,accounts[0]).call();
			// this.setState({name: details[1], id: details[0]});
			return {
				// header: this.state.name,
				header: address,
				description: (
					<Link to={`/loggedIn/doctors/${address}/doctorDetails`}>
						{/* <span>{this.state.id}</span> */}
						<a>View Doctor Detail</a>
					</Link>
				),
				fluid: true,
				image: <Image src={user} style={{width: '100px'}} size='small' disabled/>
			};
		});
		return <Card.Group items={items} />
	}
	render(){
		const { name } = this.state;

		return (
			<div className = 'records'>
				<h2 style={{color: '#012a4a'}}>Doctors list</h2>
				{this.renderList()}
			</div>
		);
	}
}

export default DoctorList;