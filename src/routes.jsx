import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";
import Fixtures from "./fixtures";
import futureFixtures from "./futureFixtures";

export default (props) => (
  <Router history={history}>
    <Switch>
      <Route exatct path="/fixtures" component={Fixtures} />
      <Route exatct path="/futureFixtures" component={futureFixtures} />
      <Redirect from="*" to="/fixtures" />
      <Route path="/screens/players" component={Players} />
      {/* <Redirect from="*" to="/screens/players" /> */}
    </Switch>
  </Router>
);
