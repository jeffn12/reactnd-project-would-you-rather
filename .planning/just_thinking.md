## Planning for the "Would You Rather?" App

---

#### Views

- navagation
  - [x] home page
  - [x] leaderboard
  - [x] create new poll
  - [x] switch user
  - [x] current user
- login
  - [x] user picker
  - [x] submit
- home
  - [x] Navigation
  - [x] polls (unanswered by default)
  - [x] toggle polls (answered v. unanswered)
  - [x] shows authedUser (in Navbar?)
- questions/:question_id
  - [x] title text="would you rather?"
  - [x] avatar of user that posted
  - [x] the poll question
  - [x] if unanswered by authedUser
    - [x] 2 options to vote on
  - [x] if answered by authedUser
    - [x] each option shows stats (# of votes, percentage of votes)
    - [x] visual indicator of authedUser's vote
- add poll
  - [x] title text="would you rather?"
  - [x] input form to create:
    - [x] 2 options to vote on
    - [x] submit, w/ redirect to home view
- leaderboard
  - [x] entries in order of total # of questions asked and answered
  - [x] entry contains
    - [x] username
    - [x] avatar
    - [x] # of questions asked
    - [x] # of questions answered
- 404 question not found

_Image Files (.tif) for Views Available Upon Request_

---

#### Components

- Navigation View (NavBar)
  - [x] NavBar
- Add Poll View (AddPoll)
  - [x] AddPoll form
- Home View (Home)
  - [x] PollList
  - [x] Poll
- Leaderboard View (Leaderboard)
  - [x] LeaderBoardEntry
- Login View
  - [ ] UserChooser
- Question View
  - [x] Poll
  - [x] Choice

---

#### Events

- NavBar: get username data
- AddPoll: get user data, set poll data
- Home: get user data, get poll data
  - PollList: show Poll components
  - Poll: get poll data
- Leaderboard: show LeaderBoardEntry components
  - LeaderBoardEntry: get user data, get poll data
- Login: set authedUser data
  - UserChooser: get user data
- Question View: get poll data, get authedUser data
  - Poll: get poll data, get user data, get authedUser data
  - Choice: get user data, get poll data, get authedUser data

##### Actions:

- [x] set authed user
- [x] get polls
- [x] get users
- [x] add a poll
- [x] add a poll answer

---

#### Data Structure and Locations

###### Redux Store:

- authedUser (current user of the appl)
  - id: (string)
- poll data (object, key = question id)
  - id: (string)
  - author: (string - user.id)
  - timestamp: (number)
  - optionOne: (object)
    - votes: (array of user ids)
    - text: (string)
  - optionTwo: (object)
    - votes: (array of user ids)
    - text: (string)
- user data (object, key = user id)
  - id: (string)
  - avatarURL: (string)
  - answers: (object) { [_id]: (string - optionOne || optionTwo) }
  - questions: (array) [_ids]

###### React State: (for controlled components only)

1. AddPoll will use local state to store the values of each input field
