// @flow

import styled from 'styled-components';

import React from 'react';
import JobsPage from './JobsPage/JobsPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import ContactPage from './ContactPage';
import EducationSection from './EducationSection';
import SplashImage from './SplashImage';

const Bio = styled.div`
	width: 80%;
    margin: auto;
    text-align: center;
`;

const SectionTitle = styled.h1`
    text-align: center;
    margin-top: 80px;
`;

const Landing = (props: {
	bio: string,
	jobs: Array<Job>,
	internships: Array<Job>,
	skills: { languages: Array<string>, frameworks: Array<string>, technologies: Array<string> },
	projects: Array<Project>,
	contactInfo: { email: string, linkedIn: string, github: string }
}) => (
	<div>
        <SplashImage />
		<h1>Site Currently Under Development</h1>
		<Bio dangerouslySetInnerHTML={{ __html: props.bio }} />
		<JobsPage jobs={props.jobs} internships={props.internships} />
		<SkillsPage
			skills={{
				languages: props.skills.languages,
				frameworks: props.skills.frameworks,
				technologies: props.skills.technologies
			}}
		/>
		<SectionTitle>Education</SectionTitle>
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
