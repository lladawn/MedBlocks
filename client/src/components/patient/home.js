import React, { Component } from 'react';
// import web3 from '../../ethereum/web3';
import medBlocks from '../../ethereum/medBlocks';
import '../../css/home.css';

class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			id: "",
			name: "",
			age: "",
			bmi: "",
			bloodGroup: "",
			sex: "",
		};
	}

	
	patientInfo = async (address) => {
		try{
			const details = await medBlocks.methods.getPatientInfo1(address).call();
			this.setState({id:details[0], name: details[1], age:details[3], bmi:details[4], sex:details[5], bloodGroup:details[6]})
		}catch(err){
			alert('To go to your Profile -> Press OK \n ______________________________________________________ \n Cautions: If profile not loaded please reload!')
			alert('Welcome user!')
		}
	}

	componentDidMount() {
		console.log(this.props.address)
		this.patientInfo(this.props.address);
	}

	render(){
		const { name, age, bmi, bloodGroup, sex} = this.state;

		return(
			<div className ="home" display = "flex">
				<div className = "home_content left" >
				<div className = "personal_info">
					<div className = "info heading"><b>Profile</b></div>
					{/* id */}
					<div className = "info name"><strong>Name :</strong>{name}<br/></div>
					<div className = "info age"><b>Age :</b>{age}<br/></div>
					<div className = "info BMI"><b>BMI: </b>{bmi}<br/> </div>
					<div className = "info bg"><b>Blood Group :</b>{bloodGroup}<br/></div>
					<div className = "info sex"><b>Sex :</b>{sex}</div>
				</div>
				</div>
				<div className = "home_content right" display= "block">

				<div className = "medical">
				<div className = "medical heading"><b>Medical History</b></div>
				<div className = "medical body">
				1.Asthama<br/>
				2.Ostereoporosis<br/>
				</div>
				</div>
				
					
				<div className = "Other_info">
					<div className = "other heading"><b>Other Information</b></div>
					<div className = "other emergency"> <b>Emergency Contacts: <br/></b> Richa, Sumit <br/></div>
					<div className = "other job"><b> Profession(op) :</b> Student<br/></div>
					<div className = "other allergies"> <b> Allergies: </b> Peanuts, Dust<br/></div>
				</div>
				</div>
			</div>
		);
	}
}

export default Home;