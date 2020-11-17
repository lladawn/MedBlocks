import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import doctorLogo from '../../img/doctor-logo.png';
import { Link } from 'react-router-dom';
import medBlocks from '../../ethereum/medBlocks';
import SearchBar from '../SearchBar';
import web3 from '../../ethereum/web3';

class DoctorList extends Component{
	constructor(props){
		super(props);
		this.state = {
			doctorAddressArray: [],
			doctorArray: []
		};
	}

	doctorList = async () => {
		const accounts = await web3.eth.getAccounts();
        const doctorAddressArray = await medBlocks.methods.getDoctorAddressArray().call();
		const count = doctorAddressArray.length;
		let doctorArray = [];
		for(let i=0;i<count;i++){
			const details = await medBlocks.methods.getDoctorList(doctorAddressArray[i],accounts[0]).call();
			doctorArray.push({
				name: details[1],
				id: details[0],
				address: doctorAddressArray[i]
			})
		}
		this.setState({doctorAddressArray, doctorArray});
	}
	
    componentDidMount(){
        this.doctorList();
	}
	
	renderList = () => {
		const items = this.state.doctorArray.map(doctor => {
			return {
				header: doctor.name,
				// meta: doctor.id,
				description: (
					<Link to={`/loggedIn/doctors/${doctor.address}/doctorDetails`}>
						<a>View Doctor Detail</a>
					</Link>
				),
				// fluid: true,
				image: <Image src={doctorLogo} style={{width: '500px'}} size='small' />,
				style: {overflowWrap: 'break-word'}
			};
		});
		return <Card.Group items={items} />
	}
	render(){
		return (
			<div  style={{paddingLeft: "400px", paddingRight: "150px"}}>
				<div style={{padding: '0px 80px 10px 80px'}}>
					<SearchBar category="Doctor" />
				</div>
				<h2 style={{color: '#012a4a', paddingBottom: '20px'}}>Doctors list</h2>
				<div>
					{this.renderList()}
				</div>
			</div>
		);
	}
}

export default DoctorList;