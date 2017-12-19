// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './store';
import AsyncRoute from './AsyncRoute';
import personalData from '../personal_data.json';
import Header from './Header';
import MainMenu from './MainMenu';

const BelowHeader = styled.div`
	width: 100%;
	height: 100vh;
	padding-top: 80px;
	box-sizing: border-box;
	overflow: hidden;
	background: #f6f6f6;
`;

const BodySection = styled.div`
	width: 79%;
	height: 100%;
	box-sizing: border-box;
	float: right;
	padding: 5px 5px 5px 5px;
	overflow-y: auto;
`;

const FourOhFour = () => <h1>404</h1>;

const App = () => (
	<Provider store={store}>
		<div>
			<Header personalData={personalData} />
			<BelowHeader>
				<MainMenu />
				<BodySection>
					<Switch>
						<Route
							exact
							path="/"
							component={props => (
								<AsyncRoute
									props={Object.assign(
										{
											bio: personalData.bio,
											jobs: personalData.jobs,
											internships: personalData.internships,
											skills: personalData.skills,
											projects: personalData.projects,
											contactInfo: personalData.contactInfo
										},
										props
									)}
									loadingPromise={import('./Landing')}
								/>
							)}
						/>
						<Route
							path="/work_experience"
							component={props => (
								<AsyncRoute
									props={Object.assign(
										{ jobs: personalData.jobs, internships: personalData.internships },
										props
									)}
									loadingPromise={import('./JobsPage/JobsPage')}
								/>
							)}
						/>
						<Route
							path="/skills"
							component={props => (
								<AsyncRoute
									props={Object.assign({ skills: personalData.skills }, props)}
									loadingPromise={import('./SkillsPage')}
								/>
							)}
						/>
						<Route
							path="/projects"
							component={props => (
								<AsyncRoute
									props={Object.assign({ projects: personalData.projects }, props)}
									loadingPromise={import('./ProjectsPage/ProjectsPage')}
								/>
							)}
						/>
						<Route
							path="/contact"
							component={props => (
								<AsyncRoute
									props={Object.assign({ contactInfo: personalData.contactInfo }, props)}
									loadingPromise={import('./ContactPage')}
								/>
							)}
						/>
						<Route
							path="/hackattack"
							component={props => (
								<AsyncRoute
									props={Object.assign({ contactInfo: personalData.contactInfo }, props)}
									loadingPromise={import('./HackAttackPage')}
								/>
							)}
						/>
						<Route component={FourOhFour} />
					</Switch>
				</BodySection>
			</BelowHeader>
		</div>
	</Provider>
);

export default App;
