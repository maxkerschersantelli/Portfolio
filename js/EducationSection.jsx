// @flow

import React from 'react';
import styled from 'styled-components';

const EducationWrapper = styled.div`
	box-sizing: border-box;
	background: #cedcde;
	padding: 15px;
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

const School = styled.div`
	font-weight: 700;
	font-size: 24px;
`;

const Major = styled.div`
	font-size: 18px;
	margin-bottom: 8px;
`;

const Achievments = styled.div`
	font-size: 16px;
`;

const EducationSection = () => (
	<EducationWrapper>
		<ImageWrapper>
			<Image src={`/public/img/jobs/santacruz.png`} alt="UCSC Logo" />
		</ImageWrapper>

		<TextWrapper>
			<School>University of California Santa Cruz</School>
			<Major>Computer Science Major (2012-2016)</Major>
			<Achievments>{"June 2016 Dean's List, Fall and Winter Quarters, 2012-2013"}</Achievments>
		</TextWrapper>
	</EducationWrapper>
);

export default EducationSection;
