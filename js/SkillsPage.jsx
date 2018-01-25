// @flow

import React from 'react';
import styled from 'styled-components';

const PageTitle = styled.div`
    margin: auto;
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    margin: 80px 0 20px 0;
`;

const SectionTitle = styled.h2`
    text-align: center;
`;

const Title = styled.div`
	font-weight: bold;
    text-align: center;
`;

const SkillWrapper = styled.div`
    width: 60%;
    margin: auto;
`;

const SkillSection = styled.div`
	display: flex;
	flex-wrap: wrap;
    justify-content: center;
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
	<div id='skill'>
		<PageTitle>Skills</PageTitle>
		<SectionTitle>Languages</SectionTitle>
        <SkillWrapper>
            <Title>Proficient</Title>
            <SkillSection>
                {props.skills.languages.proficient.map(language => <Skill key={language}>{language}</Skill>)}
            </SkillSection>
            <Title>Some Experience</Title>
            <SkillSection>
                {props.skills.languages.some_experience.map(language => <Skill key={language}>{language}</Skill>)}
            </SkillSection>
            <SectionTitle>Frameworks and Libraries</SectionTitle>
            <SkillSection>
                {props.skills.frameworks.map(framework => <Skill key={framework}>{framework}</Skill>)}
            </SkillSection>
            <SectionTitle>Technologies</SectionTitle>
            <SkillSection>
                {props.skills.technologies.map(technology => <Skill key={technology}>{technology}</Skill>)}
            </SkillSection>
        </SkillWrapper>
	</div>
);

export default SkillsPage;
