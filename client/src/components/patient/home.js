import React from 'react';
import '../css/home.css';
function Home(){
	return (
		<div className ="home" display = "flex">
		<div className = "home_content left">
		<div className = "personal_info">
			<div className = "info heading"><b>Personal Information</b></div>
			<div className = "info name"><strong>Name :</strong> Chethana T.S<br/></div>
			<div className = "info age"><b>Age :</b> 19<br/></div>
			<div className = "info bg"><b>Blood Group :</b> O +ve<br/></div>
			<div className = "info sex"><b>Sex :</b> Female</div>
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
			<div className = "other BMI"><b>BMI: </b> 85<br/> </div>
			<div className = "other allergies"> <b> Allergies: </b> Peanuts, Dust<br/></div>
		</div>
		</div>
		</div>
			
		);
}

export default Home;