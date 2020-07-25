# Would You Rather?

Would you rather play a game, or wash the dishes? You should probably take a break and play. This application is an implementation of the Would You Rather? game. The game's state is managed with Redux (state management). The UI is built with React. Material-UI components are used, although the true Material-UI Style is not followed.

1. Select a user from the list, or use the **"Add User"** button in the bottom right to create a new one (your username has to be unique)
1. Use the navigation links at the top of the page to go between the **home** view, the **leaderboard**, and the form to **add a new poll**
1. Click/press on your username or avatar to logout and switch users
1. Use the buttons to filter the question set between **"Not Answered"**, **"Answered"**, or **"All"** (_"Not Answered" is the default_)
1. To answer a question, click/press on your choice
1. Refreshing the page resets everything

# Getting Started

1. clone (or fork) this repository with the command: `git clone https://github.com/jeffn12/reactnd-project-would-you-rather.git`
1. install application dependencies with the command: `npm install`
1. start the application using the command `npm start`
1. if your browser doesn't open automatically, click on the link in your command prompt to open the application in your browser

Play on the internet (pre-built): [https://jn-would-you-rather.herokuapp.com/](https://jn-would-you-rather.herokuapp.com/)

## Endpoints

`/` - home
`/leaderboard` - leaderboard
`/add` - add a new poll
`/add-user` - add a new user

# Dependencies

In order to run this application locally, you must have installed:

1. Node.js
2. Node Package Manager (npm)

# TODO

- [ ] break down some of the larger components into more reusable chunks
- [ ] make the game persist
  - [ ] create a MongoDB collection and migrate data
  - [ ] create a serverless API (vercel?) to interact with MongoDB
- [ ] add tests
- [ ] when registering a new user, get a random avatar if a url isn't given

# Thanks

### Udacity

The \_DATA.js file is from the [udacity/reactnd-project-would-you-rather-starter](https://github.com/udacity/reactnd-project-would-you-rather-starter) repository.

### unsplash.com

Avatar Photos by:

- [Imansyah Muhamad Putera](https://unsplash.com/@imansyahmp)
- [Erik Mclean](https://unsplash.com/@introspectivedsgn)
- [Lethu Zimu](https://unsplash.com/@void_design)

### create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### App Dependencies:

1. @material-ui/core: ^4.11.0,
2. @material-ui/icons: ^4.9.1,
3. react: ^16.13.1,
4. react-dom: ^16.13.1,
5. react-redux: ^7.2.0,
6. react-redux-loading-bar: ^4.6.0,
7. react-router-dom: ^5.2.0,
8. react-scripts: 3.4.1,
9. redux: ^4.0.5,
10. redux-thunk: ^2.3.0
