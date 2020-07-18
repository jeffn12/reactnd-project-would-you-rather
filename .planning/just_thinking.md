## Planning for the "Would You Rather?" App

---

#### Views

- navagation
  - [ ] home page
  - [ ] leaderboard
  - [ ] create new poll
  - [ ] switch user
  - [ ] current user
- login
  - [ ] user picker
  - [ ] submit
- home
  - [ ] Navigation
  - [ ] polls (unanswered by default)
  - [ ] toggle polls (answered v. unanswered)
  - [ ] shows authedUser (in Navbar?)
- questions/:question_id
  - [ ] title text="would you rather?"
  - [ ] avatar of user that posted
  - [ ] the poll question
  - [ ] if unanswered by authedUser
    - [ ] 2 options to vote on
  - [ ] if answered by authedUser
    - [ ] each option shows stats (# of votes, percentage of votes)
    - [ ] visual indicator of authedUser's vote
- add poll
  - [ ] title text="would you rather?"
  - [ ] input form to create:
    - [ ] question
    - [ ] 2 options to vote on
    - [ ] submit, w/ redirect to home view
- leaderboard
  - [ ] entries in order of total # of questions asked and answered
  - [ ] entry contains
    - [ ] username
    - [ ] avatar
    - [ ] # of questions asked
    - [ ] # of questions answered
- 404 question not found

_Image Files (.tif) for Views Available Upon Request_

---

#### Components

- Navigation View (NavBar)
  - [ ] NavBar
- Add Poll View (AddPoll)
  - [ ] AddPoll form
- Home View (Home)
  - [ ] PollList
  - [ ] Poll
- Leaderboard View (Leaderboard)
  - [ ] LeaderBoardEntry
- Login View
  - [ ] UserChooser
- Question View
  - [ ] Poll
  - [ ] Choice

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
