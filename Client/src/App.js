import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Route exact path="/">
            <Search />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/saved">
            <Saved />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
