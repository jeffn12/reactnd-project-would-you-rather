import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import AnsweredPollStats from './AnsweredPollStats';
// Routing
import { Link, withRouter } from 'react-router-dom';
// Material UI Components
import {
	Avatar,
	Card,
	CardHeader,
	CardContent,
	Typography,
	Button
} from '@material-ui/core';
// Actions
import { handleAnswerPoll } from '../actions/shared';

export class Poll extends Component {
	//Handle poll submission by dispatching the handleAnswerPoll event with the poll id, current user, and the selected option
	handleChange = (option, event) => {
		event.preventDefault();
		const { dispatch, authedUser, id } = this.props;
		dispatch(handleAnswerPoll(id, option, authedUser));
	};

	render() {
		const { polls, users, id } = this.props;

		// If the poll does not exist, show a "404: Not Found" error
		if (!polls[id]) {
			return (
				<Card>
					<CardContent>404: Poll Not Found</CardContent>
				</Card>
			);
		}
		const poll = polls[id]; // Use the ID to get the poll Object
		const author = users[poll.author]; // The user object of the person who created the poll
		const userAnswers = Object.assign(
			{},
			...users[this.props.authedUser].answers
		); // get the current user's answers
		const hasAnswered = poll[userAnswers[id]] ? true : false; // true if user answered already
		const dateCreated = new Date(poll.timestamp).toLocaleDateString();

		return (
			<Link
				to={() => `/questions/${id}`}
				replace={this.props.location.pathname === `/questions/${id}`}
				style={{ textDecoration: 'none', cursor: 'default' }}
			>
				<Card style={{ margin: '0.5rem' }}>
					<CardHeader
						avatar={<Avatar src={author.avatarURL} />}
						title={`${author.name} (${author.username}) wants to know:`}
						subheader="would you rather..."
					></CardHeader>
					{hasAnswered ? (
						<AnsweredPollStats id={id} /> // If the user has already answered the poll, render the stats for it
					) : (
						// If the user has not answered the poll, render both options
						<CardContent>
							<Button
								fullWidth={true}
								variant="outlined"
								color="primary"
								onClick={(e) => this.handleChange('optionOne', e)}
								children={poll.optionOne.text}
							/>
							<Typography align="center">or</Typography>
							<Button
								fullWidth={true}
								variant="outlined"
								color="primary"
								onClick={(e) => this.handleChange('optionTwo', e)}
								children={poll.optionTwo.text}
							/>
						</CardContent>
					)}
					<Typography variant="caption" style={{ paddingRight: '1rem' }}>
						this poll was created on {dateCreated}
					</Typography>
				</Card>
			</Link>
		);
	}
}

const mapStateToProps = ({ authedUser, polls, users }, props) => {
	const { id } =
		Object.keys(props.match.params).length !== 0 ? props.match.params : props;
	return {
		authedUser,
		polls,
		users,
		id
	};
};

export default withRouter(connect(mapStateToProps)(Poll));

/**  Question for reviewer:
 * would it make sense to move the CardContent with the options for answering the poll into its own component,
 *  and then pass the option text and handler function down as props?  The fact that the handler function invokes 'dispatch'
 *  made me keep it like this.
 */
