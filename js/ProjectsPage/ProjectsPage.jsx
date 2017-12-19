// @flow

import React from 'react';
import ProjectDescription from './ProjectDescription';

const ProjectsPage = (props: { projects: Array<Project> }) => (
	<div>
		<h1>Projects:</h1>
		<div>{props.projects.map(project => <ProjectDescription key={project.name} project={project} />)}</div>
	</div>
);

export default ProjectsPage;
