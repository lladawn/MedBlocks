import React, { Component} from 'react';
import '../../css/records.css';
// import web3 from '../../ethereum/web3';
import medBlocks from '../../ethereum/medBlocks';
import SearchBar from '../SearchBar';
import { Card, Image } from 'semantic-ui-react';

class Record extends Component{	
	constructor(props){
		super(props);
		this.state = {
			count: 0,
			meetingArray: [],
		};

	}
	
	records = async () => {
		// const accounts = await web3.eth.getAccounts();
		const meetingIdArray = await medBlocks.methods.getMeetingIds(this.props.patientAddress).call();
		// 	const meetingIdArray = await medBlocks.methods.getMeetingIds(this.props.match.params.patientAddress).call();
		const count = meetingIdArray.length;
		// const count = await medBlocks.methods.getMeetingCount().call();
		let meetingArray = [];
		for(let i=0;i<count;i++){
			const details = await medBlocks.methods.getMeetingInfo(i).call();
        	const ipfsHash = await medBlocks.methods.getMeetingReportHash(i).call();
        	const doctorAddress = details[3];
        	const doctordetails = await medBlocks.methods.getPatientInfo1(doctorAddress).call();
        	const doctor = doctordetails[1];
			meetingArray.push({
			doctor,
			disease: details[0],
			medicine: details[1],
			expense: details[4],
			meetingid: details[5],
			ipfsHash,
			IsDelegatedPatient: details[6]
		})
		}
		
		this.setState({
			count,
			meetingArray			
		})
	}

	componentDidMount(){
		this.records();
	}

	renderRecords() {
		const items = this.state.meetingArray.map(meeting => {
		let report = `https://gateway.ipfs.io/ipfs/${meeting.ipfsHash}`;
			return{
				header: meeting.doctor,
				meta: meeting.disease,
				description: `Medicine- ${meeting.medicine}, TreatmentCost- ${meeting.expense} INR `,
				image: <Image src={report} style={{width: '500px'}} size="small" />,
				style: {overflowWrap: 'break-word'}
			}
		});

		return <Card.Group items={items} />
	}
	
	
    render(){
		return (
			<div style={{paddingLeft: '250px'}}>
				<div style={{padding: '0px 80px 10px 80px'}}>
					<SearchBar category="for your medical records" />
				</div>
			<h1 style={{color: "#012a4a"}}>Medical Records</h1>
			<div>
				{this.renderRecords()}
			</div>
			</div>
		);
	}
}

export default Record;