// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouterHistory } from 'react-router-dom';
import { object } from 'prop-types';
import styled from 'styled-components';
import { setSearchTerm } from '../actionCreators';

// import type { RouterHistory } from 'react-router-dom';
import LazyDropDown from './LazyDropDown';

const Wrapper = styled.div`
	width: 350px;
	margin-top: 10px;
`;

const Input = styled.input`
	height: 40px;
	width: 100%;
	appearance: none;
	border: 1px solid #e2e1e1;
	border-radius: 4px;
	font-size: 16px;

	&:focus {
		outline: none;
		box-shadow: inset 1px 1px 1px #8080808a;
	}
`;

class LazyAutoComplete extends Component {
	static contextTypes = {
		history: object
	};

	state = {
		isFocused: false
	};

	onFocus = () => {
		this.setState({ isFocused: true });
	};

	onBlur = () => {
		if (!this.state.isFocused) {
			return;
		}

		if (this.dropDown.getIgnoreBlur()) {
			this.setState({ isFocused: true });
			this.lazyComplete.focus();
		} else {
			this.setState({ isFocused: false });
		}
	};

	onSelect = (type: string, name: string) => {
		console.log(name); // eslint-disable-line no-console
		if (type === 'project') {
			this.props.history.push('/projects');
		} else if (type === 'job' || type === 'internship') {
			this.props.history.push('/work_experience');
		} else if (type === 'language' || type === 'framework' || type === 'technology') {
			this.props.history.push('/skills');
		} else if (type === 'catagory') {
			console.log('hii'); // eslint-disable-line no-console
			this.setState({ isFocused: true }, this.lazyComplete.focus());
			return;
		}
		this.setState({ isFocused: false }, this.lazyComplete.blur());
		this.lazyComplete.value = '';
	};

	handleArrowKeys = event => {
		if (event.keyCode === 40) {
			this.dropDown.indexUp();
		} else if (event.keyCode === 38) {
			this.dropDown.indexDown();
		} else if (event.keyCode === 13) {
			if (this.dropDown.getIndex() === -1) {
				return;
			}
			if (this.dropDown.getIndex() < this.dropDown.projectsIndex) {
				this.props.history.push('/work_experience');
				this.setState({ isFocused: false }, this.lazyComplete.blur());
			} else if (this.dropDown.getIndex() < this.dropDown.contactIndex) {
				this.props.history.push('/projects');
				this.setState({ isFocused: false }, this.lazyComplete.blur());
			} else {
				this.props.history.push('/skills');
			}
		}
	};

	props: {
		handleSearchTermChange: Function,
		searchTerm: string,
		personalData: PersonalData,
		history: RouterHistory
	};
	render() {
		return (
			<Wrapper>
				<Input
					onKeyDown={this.handleArrowKeys}
					onChange={this.props.handleSearchTermChange}
					value={this.props.searchTerm}
					type="text"
					placeholder="Search (eg: React, Hack Attack...)"
					focus={this.state.isFocused}
					onFocus={() => this.onFocus()}
					onBlur={() => this.onBlur()}
					innerRef={input => {
						this.lazyComplete = input;
					}}
				/>
				{this.state.isFocused ? (
					<LazyDropDown
						ref={dropDown => {
							this.dropDown = dropDown;
						}}
						personalData={this.props.personalData}
						onSelect={this.onSelect}
						searchTerm={this.props.searchTerm}
					/>
				) : (
					''
				)}
			</Wrapper>
		);
	}
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
	handleSearchTermChange(event) {
		dispatch(setSearchTerm(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LazyAutoComplete));
