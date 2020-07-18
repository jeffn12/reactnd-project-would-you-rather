### Views

- [ ] navagation
  - [ ] home page
  - [ ] leaderboard
  - [ ] create new poll
  - [ ] switch user
  - [ ] current user
- [ ] login
  - [ ] user picker
  - [ ] submit
- [ ] home
  - [ ] Navigation
  - [ ] polls (unanswered by default)
  - [ ] toggle polls (answered v. unanswered)
  - [ ] shows authedUser (in Navbar?)
- [ ] questions/:question_id
  - [ ] title text="would you rather?"
  - [ ] avatar of user that posted
  - [ ] the poll question
  - [ ] if unanswered by authedUser
    - [ ] 2 options to vote on
  - [ ] if answered by authedUser
    - [ ] each option shows stats (# of votes, percentage of votes)
    - [ ] visual indicator of authedUser's vote
- [ ] add poll
  - [ ] title text="would you rather?"
  - [ ] input form to create:
    - [ ] question
    - [ ] 2 options to vote on
    - [ ] submit, w/ redirect to home view
- [ ] leaderboard
  - [ ] entries in order of total # of questions asked and answered
  - [ ] entry contains
    - [ ] username
    - [ ] avatar
    - [ ] # of questions asked
    - [ ] # of questions answered
- [ ] 404 question not found

_Image Files (.tif) for Views Available Upon Request_

### Components

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

### Events

- NavBar
  1. get username data
- AddPoll
  1. get user data
  1. set poll data
- Home
  1. get user data
  1. get poll data
  - PollList
    1. show Poll components
  - Poll
    1. get poll data
- Leaderboard
  1. show LeaderBoardEntry components
  - LeaderBoardEntry
    1. get user data
    1. get poll data
- Login
  1. set authedUser data
  - UserChooser
    1. get user data
- Question View
  1. get poll data
  1. get authedUser data
  - Poll
    1. get poll data
    1. get user data
    1. get authedUser data
  - Choice
    1. get user data
    1. get poll data
    1. get authedUser data

### Data Structure and Locations

##### Redux Store:

1. authedUser (current user of the appl)
1. poll data (information about each poll)
1. user data (information about each user)

##### React State: (for controlled components only)

1. AddPoll will use local state to store the values of each input field
