// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
from {
	transform: rotate(0deg);
}
to {
	transform: rotate(360deg);
}
`;

const Image = styled.img`
	animation: ${spin} 4s infinate linear;
	width: 50px;
	height: 50px;
`;

const Spinner = () => <Image src="/public/img/loading.png" alt="loading indicator" />;

export default Spinner;
