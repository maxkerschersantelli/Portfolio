// @flow

import styled from 'styled-components';

import React from 'react';
import ProjectDescription from './ProjectDescription';

const Wrapper = styled.div`
	width: 80%;
    margin: 80px auto 0 auto;
`;

const Title = styled.div`
    margin: auto;
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    margin: 20px 0;
`;

const ProjectsPage = (props: { projects: Array<Project> }) => (
	<Wrapper id='project'>
		<Title>Projects</Title>
		<div>{props.projects.map(project => <ProjectDescription key={project.name} project={project} />)}</div>
	</Wrapper>
);

export default ProjectsPage;
