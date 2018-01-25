// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LazyAutoComplete from './LazyAutoComplete/LazyAutoComplete';

const HeaderWrapper = styled.header`
	z-index: 10;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	background: #fff;
	padding: 8px 30px;
	box-sizing: border-box;
	box-shadow: 1px 1px 1px #8080808a;
    opacity: .5;
`;

const Name = styled(Link)`
	font-size: 20px;
	margin: 0 20px 0 0;
`;

const NameWrapper = styled.h1`
	margin: 10px 0 0 15px;
	display: flex;
	flex-direction: column;
`;

const ContactSection = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContactLink = styled.a`
	text-align: right;
`;

const ImageSection = styled(Link)`
	display: flex;
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	border: 3px #fff solid;
	z-index: 10;
	border-radius: 50%;
	box-shadow: 0px 1px 2px #211e30;
`;

const LeftSide = styled.div`
	display: flex;
	margin-top: 40px;
`;

const Header = (props: { personalData: PersonalData }) => (
	<HeaderWrapper>
		<LeftSide>
			<ImageSection to="/">
				<Image src="/public/img/profile_image.jpg" alt="Profile" />

				<NameWrapper>
					<Name to="/">Max</Name>
					<Name to="/">Kerscher-Santelli</Name>
				</NameWrapper>
			</ImageSection>
			<LazyAutoComplete personalData={props.personalData} />
		</LeftSide>
		<ContactSection>
			<ContactLink href={props.personalData.contactInfo.github}>GitHub</ContactLink>
			<ContactLink href={props.personalData.contactInfo.linkedIn}>LinkedIn</ContactLink>
			<ContactLink href={`mailto:${props.personalData.contactInfo.email}`}>
				{props.personalData.contactInfo.email}
			</ContactLink>
		</ContactSection>
	</HeaderWrapper>
);

export default Header;
