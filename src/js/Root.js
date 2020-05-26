// @flow

"use strict";

const React = require("react");
const { BrowserRouter: Router, Switch, Route } = require("react-router-dom");
const {
  Components: { MainMenu },
} = require("App");

function Root(): React.Element<*> {
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

export default Root;
