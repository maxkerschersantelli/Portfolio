// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	background-image: url("/public/img/splash_image.jpg");
    height: 100vh; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const TextWrapper = styled.div`
    padding: 140px 0 0 100px;
    color: white;
`;
const Name = styled.div`
    font-size: 60px;
    font-weight: 700;
`;

const Title = styled.div`
    font-size: 40px;
`;

const SplashImage = () => (
	<Wrapper>
    <TextWrapper>
    <Name>Max Kerscher-Santelli</Name>
    <Title>Developer</Title>
    </TextWrapper>
	</Wrapper>
);

export default SplashImage;