// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	max-height: 300px;
	width: 350px;
	position: absolute;
	background: grey;
	overflow-y: auto;
	border-radius: 5px;
`;

const Catagory = styled.div`
	height: 20px;
	background: #ffffff;
	color: #bababa;
	font-size: 12px;
	box-sizing: border-box;
	padding: 4px 0 0 5px;
	box-shadow: 3px 3px 3px #8080808a;
	z-index: 2;
`;

const Item = styled.div`
	background: #ffffff;
	height: 25px;
	cursor: pointer;
	padding: 4px 0 0 5px;
	box-sizing: border-box;
`;

class LazyDropDown extends Component {
	state = {
		ignoreBlur: false,
		currentIndex: -1
	};

	componentDidMount() {
		this.dropDown.addEventListener('mouseenter', () => this.setState({ ignoreBlur: true }));
		this.dropDown.addEventListener('mouseleave', () => this.setState({ ignoreBlur: false }));
		window.addEventListener('onkeydown', event => this.handleKeyDown(event));
	}

	componentWillUnmount() {
		this.dropDown.removeEventListener('mouseenter', () => this.setState({ ignoreBlur: true }));
		this.dropDown.removeEventListener('mouseleave', () => this.setState({ ignoreBlur: false }));
		window.addEventListener('onkeydown', event => this.handleKeyDown(event));
	}

	getIgnoreBlur = () => this.state.ignoreBlur;

	setIndex = newIndex => {
		this.setState({ currentIndex: newIndex });
	};

	getIndex = () => this.state.currentIndex;

	indexUp = () => {
		if (this.state.currentIndex < this.indexCounter - 1) {
			this.setState({ currentIndex: this.state.currentIndex + 1 }, function() {
				console.log(this.options.filter(Boolean), this.state.currentIndex);
				this.options.filter(Boolean)[this.state.currentIndex].scrollIntoView(false);
			});
		}
	};

	indexDown = () => {
		if (this.state.currentIndex > 0) {
			this.setState(
				{ currentIndex: this.state.currentIndex - 1 },
				this.options.filter(Boolean)[this.state.currentIndex].scrollIntoView(true)
			);
		}
	};

	indexCounter = 0;
	options = [];

	props: { personalData: PersonalData, onSelect: Function, searchTerm: string };

	buildJobsSection = () => {
		const returnOptions = [];

		const jobs = this.props.personalData.jobs.filter(job =>
			`${job.company} ${job.position} ${job.company_sub_name ? job.company_sub_name : ''}`
				.toLowerCase()
				.includes(this.props.searchTerm.toLowerCase())
		);

		const internships = this.props.personalData.internships.filter(internship =>
			`${internship.company} ${internship.position} ${internship.company_sub_name
				? internship.company_sub_name
				: ''}`
				.toLowerCase()
				.includes(this.props.searchTerm.toLowerCase())
		);

		if (jobs.length) {
			returnOptions.push(
				<Catagory key="jobs" onMouseDown={() => this.props.onSelect('catagory', 'catagory')}>
					Work Eperience:
				</Catagory>
			);
			jobs.map(job => {
				const indexCopy = Object.assign({}, { index: this.indexCounter });
				returnOptions.push(
					<Item
						key={job.company}
						onMouseOver={() => this.setIndex(indexCopy.index)}
						className={this.state.currentIndex === this.indexCounter ? 'optionSelected' : ''}
						onMouseDown={() => this.props.onSelect('job', job.company)}
						innerRef={ref => this.options.push(ref)}
					>{`${job.position}: ${job.company}`}</Item>
				);
				this.indexCounter += 1;

				return 0;
			});
		}

		if (internships.length) {
			returnOptions.push(
				<Catagory key="intern" onMouseDown={() => this.props.onSelect('catagory', 'catagory')}>
					Internships:
				</Catagory>
			);
			internships.map(internship => {
				const indexCopy = Object.assign({}, { index: this.indexCounter });

				returnOptions.push(
					<Item
						key={internship.company}
						onMouseOver={() => this.setIndex(indexCopy.index)}
						className={this.state.currentIndex === this.indexCounter ? 'optionSelected' : ''}
						onMouseDown={() => this.props.onSelect('internship', internship.company)}
						innerRef={ref => this.options.push(ref)}
					>{`${internship.position}: ${internship.company}`}</Item>
				);
				this.indexCounter += 1;

				return 0;
			});
		}
		return returnOptions;
	};

	buildSkillsSection = () => {
		const returnOptions = [];

		const languages = this.props.personalData.skills.languages.proficient
			.concat(this.props.personalData.skills.languages.some_experience)
			.filter(language => language.toLowerCase().includes(this.props.searchTerm.toLowerCase()));

		const frameworks = this.props.personalData.skills.frameworks.filter(framework =>
			framework.toLowerCase().includes(this.props.searchTerm.toLowerCase())
		);

		const technologies = this.props.personalData.skills.technologies.filter(technology =>
			technology.toLowerCase().includes(this.props.searchTerm.toLowerCase())
		);

		if (languages.length) {
			returnOptions.push(
				<Catagory key="languages" onMouseDown={() => this.props.onSelect('catagory', 'catagory')}>
					Languages:
				</Catagory>
			);
			languages.map(language => {
				const indexCopy = Object.assign({}, { index: this.indexCounter });

				returnOptions.push(
					<Item
						key={language}
						onMouseOver={() => this.setIndex(indexCopy.index)}
						className={this.state.currentIndex === this.indexCounter ? 'optionSelected' : ''}
						onMouseDown={() => this.props.onSelect('language', language)}
						innerRef={ref => this.options.push(ref)}
					>{`${language}`}</Item>
				);
				this.indexCounter += 1;

				return 0;
			});
		}

		if (frameworks.length) {
			returnOptions.push(
				<Catagory key="frameworks" onMouseDown={() => this.props.onSelect('catagory', 'catagory')}>
					Frameworks and Libraries:
				</Catagory>
			);
			frameworks.map(framework => {
				const indexCopy = Object.assign({}, { index: this.indexCounter });

				returnOptions.push(
					<Item
						key={framework}
						onMouseOver={() => this.setIndex(indexCopy.index)}
						className={this.state.currentIndex === this.indexCounter ? 'optionSelected' : ''}
						onMouseDown={() => this.props.onSelect('framework', framework)}
						innerRef={ref => this.options.push(ref)}
					>{`${framework}`}</Item>
				);
				this.indexCounter += 1;

				return 0;
			});
		}

		if (technologies.length) {
			returnOptions.push(
				<Catagory key="technologies" onMouseDown={() => this.props.onSelect('catagory', 'catagory')}>
					Technologies:
				</Catagory>
			);
			technologies.map(technology => {
				const indexCopy = Object.assign({}, { index: this.indexCounter });

				returnOptions.push(
					<Item
						key={technology}
						onMouseOver={() => this.setIndex(indexCopy.index)}
						className={this.state.currentIndex === this.indexCounter ? 'optionSelected' : ''}
						onMouseDown={() => this.props.onSelect('technology', technology)}
						innerRef={ref => this.options.push(ref)}
					>{`${technology}`}</Item>
				);
				this.indexCounter += 1;

				return 0;
			});
		}

		return returnOptions;
	};

	buildProjectsSection = () => {
		const returnOptions = [];

		const projects = this.props.personalData.projects.filter(project =>
			`${project.name} ${project.type}`.toLowerCase().includes(this.props.searchTerm.toLowerCase())
		);

		if (projects.length) {
			this.projectsIndex = this.indexCounter;
			returnOptions.push(
				<Catagory key="projects" onMouseDown={() => this.props.onSelect('catagory', 'catagory')}>
					Projects:
				</Catagory>
			);
			projects.map(project => {
				const indexCopy = Object.assign({}, { index: this.indexCounter });
				returnOptions.push(
					<Item
						key={project.name}
						onMouseOver={() => this.setIndex(indexCopy.index)}
						className={this.state.currentIndex === this.indexCounter ? 'optionSelected' : ''}
						onMouseDown={() => this.props.onSelect('project', project.name)}
						innerRef={ref => this.options.push(ref)}
					>{`${project.name}: ${project.type}`}</Item>
				);
				this.indexCounter += 1;

				return 0;
			});
		}

		return returnOptions;
	};

	buildContactSection = () => {
		const returnOptions = [];
		const contactInfo = this.props.personalData.contactInfo;

		const linkedIn = `linkedIn`.toLowerCase().includes(this.props.searchTerm.toLowerCase());
		const github = `github`.toLowerCase().includes(this.props.searchTerm.toLowerCase());
		const email = `email`.toLowerCase().includes(this.props.searchTerm.toLowerCase());

		if (linkedIn || email || github) {
			this.contactIndex = this.indexCounter;

			const indexCopy = Object.assign({}, { index: this.indexCounter });

			returnOptions.push(
				<Catagory
					key="contact"
					onMouseOver={() => this.setIndex(indexCopy.index)}
					onMouseDown={() => this.props.onSelect('catagory', 'catagory')}
				>
					Contact Information:
				</Catagory>
			);
		}

		if (linkedIn) {
			const indexCopy = Object.assign({}, { index: this.indexCounter });

			returnOptions.push(
				<Item
					key="linkedIn"
					onMouseOver={() => this.setIndex(indexCopy.index)}
					className={this.state.currentIndex === this.indexCounter ? 'optionSelected' : ''}
					innerRef={ref => this.options.push(ref)}
				>
					<a href={contactInfo.linkedIn}>LinkedIn</a>
				</Item>
			);
			this.indexCounter += 1;
		}

		if (github) {
			const indexCopy = Object.assign({}, { index: this.indexCounter });

			returnOptions.push(
				<Item
					key="git"
					onMouseOver={() => this.setIndex(indexCopy.index)}
					className={this.state.currentIndex === this.indexCounter ? 'optionSelected' : ''}
					innerRef={ref => this.options.push(ref)}
				>
					<a href={contactInfo.github}>GitHub</a>
				</Item>
			);
			this.indexCounter += 1;
		}

		if (email) {
			const indexCopy = Object.assign({}, { index: this.indexCounter });

			returnOptions.push(
				<Item
					key="email"
					onMouseOver={() => this.setIndex(indexCopy.index)}
					className={this.state.currentIndex === this.indexCounter ? 'optionSelected' : ''}
					innerRef={ref => this.options.push(ref)}
				>
					<a href={`mailto:${contactInfo.email}`}>Email</a>
				</Item>
			);
			this.indexCounter += 1;
		}

		return returnOptions;
	};

	buildOptions = () => {
		const returnOptions = this.buildJobsSection().concat(
			this.buildProjectsSection(),
			this.buildContactSection(),
			this.buildSkillsSection()
		);
		return <div>{returnOptions}</div>;
	};

	render() {
		this.indexCounter = 0;
		this.options.length = 0;

		return (
			<Wrapper
				innerRef={dropDown => {
					this.dropDown = dropDown;
				}}
			>
				{this.buildOptions()}
			</Wrapper>
		);
	}
}

export default LazyDropDown;
