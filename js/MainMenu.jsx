// @flow

import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Wrapper = styled.div`
	width: 20%;
	height: 100vh;
	float: left;
	padding: 60px 0;
	box-sizing: border-box;
	background: #472650;
	box-shadow: 1px 1px 1px #8080808a;
	margin-right: 1%;
	display: flex;
	flex-direction: column;
`;

const Button = styled(Link)`
	width: 100%;
	height: 50px;
	min-height: 50px;
	margin: 10px 0 0 0;
	background: #694b8a;
	text-align: center;
	box-shadow: -2px 1px 2px #000000;
	padding-top: 15px;
	box-sizing: border-box;
	color: #ffffff;
`;

const ButtonSelected = styled(Link)`
	width: 100%;
	height: 50px;
	min-height: 50px;
	margin: 10px 0 0 0;
	text-align: center;
	background: #34153c;
	box-shadow: inset 0px 1px 2px #000000;
	padding-top: 15px;
	box-sizing: border-box;
	color: #ffffff;
`;

const MainMenu = (props: { location: { pathname: string } }) => (
	<Wrapper>
		{props.location.pathname === '/work_experience' ? (
			<ButtonSelected to="/work_experience">Work Experience</ButtonSelected>
		) : (
			<Button to="/work_experience">Work Experience</Button>
		)}
		{props.location.pathname === '/skills' ? (
			<ButtonSelected to="/skills">Skills</ButtonSelected>
		) : (
			<Button to="/skills">Skills</Button>
		)}
		{props.location.pathname === '/projects' ? (
			<ButtonSelected to="/projects">Projects</ButtonSelected>
		) : (
			<Button to="/projects">Projects</Button>
		)}
		{props.location.pathname === '/contact' ? (
			<ButtonSelected to="/contact">Contact Information</ButtonSelected>
		) : (
			<Button to="/contact">Contact Information</Button>
		)}
	</Wrapper>
);

export default withRouter(MainMenu);
