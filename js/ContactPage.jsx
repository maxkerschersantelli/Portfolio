// @flow

import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
	font-weight: bold;
	margin-top: 10px;
`;

const Message = styled.div`
	font-size: 18px;
`;

const ContactPage = (props: { contactInfo: { email: string, linkedIn: string, github: string, resume: string } }) => (
	<div>
		<h1>Contact Information:</h1>
		<Message>
			Please feel free to <a href={`emailto:${props.contactInfo.email}`}>email</a> me or message me on{' '}
			<a href={props.contactInfo.linkedIn}>LinkedIn</a> if you have any questions or comments and I will get back
			to you shortly.
		</Message>
		<Title>Email:</Title>
		<a href={`emailto:${props.contactInfo.email}`}>{props.contactInfo.email}</a>
		<Title>LinkedIn:</Title>
		<a href={props.contactInfo.linkedIn}>{props.contactInfo.linkedIn}</a>
		<h1>Resources</h1>
		<Message>If you would like to learn more you can use the resources below:</Message>
		<Title>Resume:</Title>
		<a href={props.contactInfo.resume}>Click here to download</a>
		<Title>GitHub:</Title>
		<a href={props.contactInfo.github}>{props.contactInfo.github}</a>
	</div>
);

export default ContactPage;
