// @flow

import React from 'react';
import styled from 'styled-components';

const JobWrapper = styled.div`
	box-sizing: border-box;
	background: #cedcde;
	padding: 15px 15px 0 15px;
	margin: 5px 5px 10px 5px;
	display: flex;
	border-radius: 5px;
	box-shadow: 1px 1px 1px #8080808a;
`;

const ImageWrapper = styled.div`
	width: 100px;
	min-width: 100px;
	height: 100px;
	background: #fff;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 1px 1px 1px #8080808a;

	@media (max-width: 780px) {
		width: 75px;
		min-width: 75px;
		height: 75px;
	}
`;

const Image = styled.img`
	width: 100%;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2px 15px 0 15px;
	box-sizing: border-box;
`;

const Position = styled.div`
	font-weight: 700;
	font-size: 24px;
`;

const Company = styled.div`
	font-size: 18px;
`;

const DiscriptionItem = styled.li`
	margin: 2px 0 2px 0;
`;

const JobDescription = (props: { job: Job }) => (
	<JobWrapper>
		<ImageWrapper>
			<Image src={`/public/img/jobs/${props.job.img}`} alt="Company Logo" />
		</ImageWrapper>

		<TextWrapper>
			<Position>
				{props.job.position_sub_name
					? `${props.job.position} (${props.job.position_sub_name}):`
					: `${props.job.position}:`}
			</Position>
			<Company>
				{props.job.company_sub_name
					? `${props.job.company} (${props.job.company_sub_name})`
					: `${props.job.company}`}
			</Company>
			<ul>
				{props.job.descriptions.map(description => (
					<DiscriptionItem key={description}>{description}</DiscriptionItem>
				))}
			</ul>
		</TextWrapper>
	</JobWrapper>
);

export default JobDescription;
