// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 40px;
    margin-top: 80px;
`;

const Title = styled.div`
	font-weight: bold;
	margin-top: 10px;
    text-align: center;
`;

const Message = styled.div`
	font-size: 18px;
    text-align: center;
`;

const SectionTitle = styled.h1`
    text-align: center;
`;

const Link = styled.a`
    display: block;
    text-align: center;
    width: 100%;
`;

const ContactPage = (props: { contactInfo: { email: string, linkedIn: string, github: string, resume: string } }) => (
	<Wrapper id='contact'>
		<SectionTitle>Contact Information</SectionTitle>
		<Message>
			Please feel free to <a href={`emailto:${props.contactInfo.email}`}>email</a> me or message me on{' '}
			<a href={props.contactInfo.linkedIn}>LinkedIn</a> if you have any questions or comments and I will get back
			to you shortly.
		</Message>
		<Title>Email</Title>
		<Link href={`emailto:${props.contactInfo.email}`}>{props.contactInfo.email}</Link>
		<Title>LinkedIn</Title>
		<Link href={props.contactInfo.linkedIn}>{props.contactInfo.linkedIn}</Link>
		<SectionTitle>Resources</SectionTitle>
		<Message>If you would like to learn more you can use the resources below:</Message>
		<Title>Resume</Title>
		<Link href={props.contactInfo.resume}>Click here to download</Link>
		<Title>GitHub</Title>
		<Link href={props.contactInfo.github}>{props.contactInfo.github}</Link>
	</Wrapper>
);

export default ContactPage;
