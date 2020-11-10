import React , {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
{
	title: 'Home',
	path: '/',
	icon : <AiIcons.AiFillHome/>,
	cName: 'nav-text'
},
{
	title: 'Records',
	path: '/records',
	icon : <IoIcons.IoIosPaper/>,
	cName: 'nav-text'
},
{
	title: 'Doctors',
	path: '/doctors',
	icon : <AiIcons.AiFillHome/>,
	cName: 'nav-text'
},
{
	title: 'Home',
	path: '/',
	icon : <AiIcons.AiFillHome/>,
	cName: 'nav-text'
},
{
	title: 'Home',
	path: '/',
	icon : <AiIcons.AiFillHome/>,
	cName: 'nav-text'
},
{
	title: 'Home',
	path: '/',
	icon : <AiIcons.AiFillHome/>,
	cName: 'nav-text'
},]