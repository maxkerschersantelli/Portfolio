// @flow

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
	z-index: 10;
	position: fixed;
	display: flex;
	align-items: center;
    justify-content: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 60px;
	background-color: rgba(0,0,0,0.75);
	box-sizing: border-box;
    color: white;
`;

const Menu = styled.div`
	display: flex;
    height: 100%
`;

const Button = styled.div`
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    opacity: .75;
    color: #fff;
    margin: 0 10px 0 10px;
`;

const ButtonText = styled.span`
    width: 100%;
    text-align: center;
`;

const HeaderMenu = () => (
	<HeaderWrapper>
        <Menu>
            <Button onClick={() => 
                {
                    const el = document.getElementById('experience');
                    window.scroll({
                        top: el.getBoundingClientRect().top + window.scrollY - 70, 
                        left: 0, 
                        behavior: 'smooth' 
                    });
                }
            }>
                <ButtonText>Experience</ButtonText>
            </Button>
            <Button onClick={() => 
                {
                    const el = document.getElementById('skill');
                    window.scroll({
                        top: el.getBoundingClientRect().top + window.scrollY - 70, 
                        left: 0, 
                        behavior: 'smooth' 
                    });
                }
            }>
                <ButtonText>Skills</ButtonText>
            </Button>
            <Button onClick={() => 
                {
                    const el = document.getElementById('project');
                    window.scroll({
                        top: el.getBoundingClientRect().top + window.scrollY - 70, 
                        left: 0, 
                        behavior: 'smooth' 
                    });
                }
            }>
                <ButtonText>Projects</ButtonText>
            </Button>
            <Button onClick={() => 
                {
                    const el = document.getElementById('contact');
                    window.scroll({
                        top: el.getBoundingClientRect().top + window.scrollY - 70, 
                        left: 0, 
                        behavior: 'smooth' 
                    });
                }
            }>
                <ButtonText>Contact</ButtonText>
            </Button>
        </Menu>
	</HeaderWrapper>
);

export default HeaderMenu;
