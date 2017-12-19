// @flow

import React from 'react';
import JobDescription from './JobDescription';

const JobsPage = (props: { jobs: Array<Job>, internships: Array<Job> }) => (
	<div>
		<h1>Work Experience:</h1>
		<div>{props.jobs.map(job => <JobDescription key={job.company} job={job} />)}</div>
		<h1>Interships:</h1>
		<div>{props.internships.map(internship => <JobDescription key={internship.company} job={internship} />)}</div>
	</div>
);

export default JobsPage;
