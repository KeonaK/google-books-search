import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "../src/components/Nav";
import Search from "../src/pages/Search";
import Saved from "../src/pages/Saved";
import NoMatch from "../src/pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
