// @flow

import styled from 'styled-components';

import React from 'react';
import JobDescription from './JobDescription';

const Title = styled.div`
    margin: auto;
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    margin: 80px 0 20px 0;
`;

const JobBody = styled.div`
    width: 80%;
    margin: auto;
`;

const JobsPage = (props: { jobs: Array<Job>, internships: Array<Job> }) => (
	<div id='experience'>
		<Title>Work Experience</Title>
		<JobBody>{props.jobs.map(job => <JobDescription key={job.company} job={job} />)}</JobBody>
		<Title>Interships</Title>
		<JobBody>{props.internships.map(internship => <JobDescription key={internship.company} job={internship} />)}</JobBody>
	</div>
);

export default JobsPage;
