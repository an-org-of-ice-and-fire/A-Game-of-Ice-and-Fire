// @flow

import { MainMenu } from "App";

import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

// exported as default since not routed through App.js
export default Root;
