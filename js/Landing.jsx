// @flow

import React from 'react';
import JobsPage from './JobsPage/JobsPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import ContactPage from './ContactPage';
import EducationSection from './EducationSection';

const Landing = (props: {
	bio: string,
	jobs: Array<Job>,
	internships: Array<Job>,
	skills: { languages: Array<string>, frameworks: Array<string>, technologies: Array<string> },
	projects: Array<Project>,
	contactInfo: { email: string, linkedIn: string, github: string }
}) => (
	<div>
		<h1>Site Currently Under Development</h1>
		<div dangerouslySetInnerHTML={{ __html: props.bio }} />
		<JobsPage jobs={props.jobs} internships={props.internships} />
		<SkillsPage
			skills={{
				languages: props.skills.languages,
				frameworks: props.skills.frameworks,
				technologies: props.skills.technologies
			}}
		/>
		<h1>Education:</h1>
		<EducationSection />
		<ProjectsPage projects={props.projects} />
		<ContactPage
			contactInfo={{
				email: props.contactInfo.email,
				linkedIn: props.contactInfo.linkedIn,
				github: props.contactInfo.github
			}}
		/>
	</div>
);

export default Landing;
