import React from "react";
// Components
import NavBar from "./NavBar";
import Poll from "./Poll";
import PollList from "./PollList";

function App() {
  return (
    <div>
      <NavBar />
      Would You Rather?
      <PollList />
      <Poll />
    </div>
  );
}

export default App;
