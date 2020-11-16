import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import {Link} from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
// import web3 from '../../ethereum/web3';
// import medBlocks from '../../ethereum/medBlocks';

export const SideBarData = [
{
	title: 'Home',
	path: '/loggedIn',
	icon : <AiIcons.AiFillHome/>,
	cName: 'nav-text'
},
{
	title: 'Medical Records',
	path: '/loggedIn/records',
	icon : <IoIcons.IoIosPaper/>,
	cName: 'nav-text'
},
{
	title: 'Doctors',
	path: '/loggedIn/doctors',
	icon : <AiIcons.AiFillHome/>,
	cName: 'nav-text'
},
]
