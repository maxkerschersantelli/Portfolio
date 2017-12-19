// @flow

import React from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
	box-sizing: border-box;
	background: #cedcde;
	padding: 15px;
	margin: 5px;
	border-radius: 5px;
	box-shadow: 1px 1px 1px #8080808a;
	display: flex;
	justify-content: space-between;
`;

const TextSection = styled.div``;

const ProjectName = styled.div`
	font-weight: 700;
	font-size: 24px;
`;

const ProjectType = styled.div`
	font-size: 18px;
`;

const Description = styled.div`
	margin: 10px;
`;

const LinkSection = styled.div`
	width: 200px;
	min-width: 200px;
	box-sizing: border-box;
	padding-left: 10px;
	display: flex;
	flex-direction: column;
`;

const Button = styled.a`
	box-sizing: border-box;
	width: 100%;
	padding: 10px;
	background: #fd5a4a;
	box-shadow: 1px 1px 1px #8080808a;
	margin-bottom: 10px;
	border-radius: 3px;
	color: white;
	text-shadow: 1px 1px 1px #8080808a;
`;

const ProjectDescription = (props: { project: Project }) => (
	<ProjectWrapper>
		<TextSection>
			<ProjectName>{props.project.name}:</ProjectName>
			<ProjectType>{props.project.type}</ProjectType>
			<Description>{props.project.description}</Description>
		</TextSection>
		<LinkSection>
			{props.project.url ? (
				<Button href={props.project.url}>For More Information About This Project Click Here</Button>
			) : (
				''
			)}
			{props.project.git ? (
				<Button href={props.project.git}>To See The Github Page For This Project Click Here</Button>
			) : (
				''
			)}
		</LinkSection>
	</ProjectWrapper>
);

export default ProjectDescription;
