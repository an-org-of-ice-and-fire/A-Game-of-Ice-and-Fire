// @flow

import MainMenu from "./route_containers/MainMenu.react.js";

import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./../static_assets/logo.svg";
import "./../css/App.css";

function App(): React.Element<*> {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainMenu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
