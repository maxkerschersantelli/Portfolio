// @flow

import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
	font-weight: bold;
`;

const SkillSection = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Skill = styled.div`
	margin: 5px;
	background: #abc5d8;
	height: 40px;
	border-radius: 20px;
	box-sizing: border-box;
	padding: 10px 12px 0 12px;
	min-width: 50px;
	text-align: center;
	box-shadow: 1px 1px 1px #8080808a;
`;

const SkillsPage = (props: {
	skills: {
		languages: { proficient: Array<string>, some_experience: Array<string> },
		frameworks: Array<string>,
		technologies: Array<string>
	}
}) => (
	<div>
		<h1>Skills:</h1>
		<h3>Languages:</h3>
		<Title>Proficient:</Title>
		<SkillSection>
			{props.skills.languages.proficient.map(language => <Skill key={language}>{language}</Skill>)}
		</SkillSection>
		<Title>Some Experience:</Title>
		<SkillSection>
			{props.skills.languages.some_experience.map(language => <Skill key={language}>{language}</Skill>)}
		</SkillSection>
		<h3>Frameworks and Libraries:</h3>
		<SkillSection>
			{props.skills.frameworks.map(framework => <Skill key={framework}>{framework}</Skill>)}
		</SkillSection>
		<h3>Technologies:</h3>
		<SkillSection>
			{props.skills.technologies.map(technology => <Skill key={technology}>{technology}</Skill>)}
		</SkillSection>
	</div>
);

export default SkillsPage;
