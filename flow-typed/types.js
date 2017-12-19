// @flow

export type Show = {
	title: string,
	description: string,
	year: string,
	imdbID: string,
	trailer: string,
	poster: string,
	rating?: string
};

export type Job = {
	company: string,
	company_sub_name?: string,
	start_date: string,
	end_date: string,
	position: string,
	position_sub_name?: string,
	descriptions: Array<string>,
	img: string
};

export type Project = {
	name: string,
	type: string,
	description: string,
	url?: string,
	git?: string
};

export type PersonalData = {
	bio: string,
	jobs: Array<Job>,
	internships: Array<Job>,
	skills: {
		languages: {
			proficient: Array<string>,
			some_experience: Array<string>
		},
		frameworks: Array<string>,
		technologies: Array<string>
	},
	projects: Array<Project>,
	contactInfo: {
		email: string,
		linkedIn: string,
		github: string
	}
};

declare var module: {
	hot: {
		accept(path: string, callback: () => void): void
	}
};

declare type ActionType = 'Set_SEARCH_TERM' | 'ADD_API_DATA';

declare type ActionT<A: ActionType, P> = {|
	type: A,
	payload: P
|};

export type Action = ActionT<'Set_SEARCH_TERM', string> | ActionT<'ADD_API_DATA', Show>;
