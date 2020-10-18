pragma solidity ^0.4.25;

contract MedBlocks{
  struct Meeting{
    string diseases;
    uint expense;
    string medicineName;
    string IpReportHash;
    bytes32 meetingID;
    bool IsDelegatedPatient;
    address patientAddress;
    address doctorAddress;
  }

  Meeting[] public meeting;

  struct PatientRecord{
    bytes32 patientId;
    string patientFullName;
    uint aadharCardNumber;
    bool IsPatient;
    uint passCode;
    mapping(address => bool) IsDelegatedPatient;
    bytes32[] meetingIdArray;
  }

  mapping(address => PatientRecord) public patientList;
  address[] public patientAddressArray;

  struct DoctorRecord{
    bytes32 doctorId;
    string doctorFullName;
    uint aadharCardNumber;
    bool IsDoctor;
    uint passCode;
    mapping(address => bool) IsDelegatedPatient;
  }
  address[] public doctorAddressArray;
  mapping(address => DoctorRecord) public doctorList;

  address Owner;
  constructor() public payable{
    Owner=msg.sender;
  }

  //finds if the patient has given access to the doctor
  function PatientIsDelegate(address _doctorAddress, address _patientAddress) public view returns(bool) {
    return doctorList[_doctorAddress].IsDelegatedPatient[_patientAddress];
  }

  //get the details of the doctor from doctorRecords
  function getDoctorList(address _doctorAddress, address _patientAddress) public view returns(bytes32,string,uint,bool,uint){
    return(
      doctorList[_doctorAddress].doctorId,
      doctorList[_doctorAddress].doctorFullName,
      doctorList[_doctorAddress].aadharCardNumber,
      doctorList[_doctorAddress].IsDelegatedPatient[_patientAddress],
      doctorList[_doctorAddress].passCode
    );
  }

  function getDoctorAddress(uint _index) public view returns(address){
    return doctorAddressArray[_index];
  }

  function getDoctorAddressArray() public view returns(address[]) {
    return doctorAddressArray;
  }

  function getPatientAddress(uint _index) public view returns(address) {
    return patientAddressArray[_index];
  }

  function getPatientAddressArray() public view returns(address[]){
    return patientAddressArray;
  }

  function getPatientInfo(address _address) public view returns(bytes32,string,uint,bool,uint,bool,uint) {
    return(
      patientList[_address].patientId,
      patientList[_address].patientFullName,
      patientList[_address].aadharCardNumber,
      patientList[_address].IsPatient,
      patientList[_address].passCode,
      //returns if the caller of the function has the right to access the patient's info
      patientList[_address].IsDelegatedPatient[msg.sender],
      //gives the no. of doctor meetings the patient had till now
      patientList[_address].meetingIdArray.length
    );
  }

  function getPatientCount() public view returns(uint) {
    return patientAddressArray.length;
  }

  function getMeetingInfo(uint _index) public view returns(string,string,address,address,uint,bytes32,bool){
    return(
      meeting[_index].diseases,
      meeting[_index].medicineName,
      meeting[_index].patientAddress,
      meeting[_index].doctorAddress,
      meeting[_index].expense,
      meeting[_index].meetingID,
      meeting[_index].IsDelegatedPatient
    );
  }

  function getMeetingReportHash(uint _index) public view returns(string) {
    return meeting[_index].IpReportHash;
  }

  function getUserIsDoctor(address _doctorAddress) public view returns(bool) {
    return doctorList[_doctorAddress].IsDoctor;
  }

  function getUserIsPatient(address _patientAddress) public view returns(bool) {
    return patientList[_patientAddress].IsPatient;
  }

  function getMeetingCount() public view returns(uint) {
    return meeting.length;
  }

  function getMeetingIds(address _patientAddress) public view returns(bytes32[]) {
    return patientList[_patientAddress].meetingIdArray;
  }

  function AddNewPatient(string memory _name,uint _aadhar,uint _code) public returns(string memory) {
    require(!patientList[msg.sender].IsPatient);
    patientList[msg.sender].IsPatient = true;
    patientList[msg.sender].patientFullName = _name;
    patientList[msg.sender].aadharCardNumber = _aadhar;
    patientList[msg.sender].passCode = _code;
    patientList[msg.sender].patientId = bytes32(keccak256(abi.encodePacked(msg.sender,now)));
    patientAddressArray.push(msg.sender);
    return "New Patient Created";
  }

  function AddNewDoctor(string memory _name, uint _aadhar, uint _code) public returns(string memory) {
    require(!doctorList[msg.sender].IsDoctor);
    doctorList[msg.sender].IsDoctor = true;
    doctorList[msg.sender].doctorFullName = _name;
    doctorList[msg.sender].aadharCardNumber = _aadhar;
    doctorList[msg.sender].passCode = _code;
    doctorList[msg.sender].doctorId = bytes32(keccak256(abi.encodePacked(msg.sender,now)));
    doctorAddressArray.push(msg.sender);
    return "New Doctor Created";
  }

  //this function is to give access to the doctor
  function delegatePatient(address _doctorAddress, uint _passCode) public payable returns(string memory) {
    require(doctorList[_doctorAddress].IsDoctor);
    require(patientList[msg.sender].IsPatient);
    require(patientList[msg.sender].passCode == _passCode);
    require(!patientList[msg.sender].IsDelegatedPatient[_doctorAddress]);
    patientList[msg.sender].IsDelegatedPatient[_doctorAddress] = true;
    doctorList[_doctorAddress].IsDelegatedPatient[msg.sender] = true;
    return "Patient is delegated";
  }

  function RevokeDelegatePatient(address _doctorAddress, uint passCode) public payable returns(string memory) {
    require(doctorList[_doctorAddress].IsDoctor);
    require(patientList[msg.sender].IsPatient);
    require(patientList[msg.sender].passCode == passCode);
    require(patientList[msg.sender].IsDelegatedPatient[_doctorAddress]);
    patientList[msg.sender].IsDelegatedPatient[_doctorAddress] = false;
    doctorList[_doctorAddress].IsDelegatedPatient[msg.sender] = false;
    return "Revoked";
  }

  //New Meeting
  function AddPatientMeetingInfo(address _patientAddress, string _diseases, uint _expense, string _medicineName, string _IpReportHash) public returns(string memory) {
    require(doctorList[msg.sender].IsDoctor);
    require(patientList[_patientAddress].IsDelegatedPatient[msg.sender]);
    bytes32 meetingId = bytes32(keccak256(abi.encodePacked(msg.sender,_patientAddress,now)));

    Meeting memory newMeeting = Meeting({
      diseases: _diseases,
      expense: _expense,
      medicineName: _medicineName,
      IpReportHash: _IpReportHash,
      meetingID: meetingId,
      IsDelegatedPatient: true,
      patientAddress: _patientAddress,
      doctorAddress: msg.sender
    });

    meeting.push(newMeeting);
    patientList[_patientAddress].meetingIdArray.push(meetingId);
    return "Add Meeting Info";
  }
}