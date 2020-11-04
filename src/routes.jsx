import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";
import Fixtures from "./screens/fixtures";
import futureFixtures from "./screens/futureFixtures";
import Players from "../src/screens/players";
import Login from "./screens/login";
import Subscribe from "./screens/subscribe";

export default (props) => (
  <Router history={history}>
    <Switch>
      <Route exatct path="/fixtures" component={Fixtures} />
      <Route exatct path="/futureFixtures" component={futureFixtures} />
      <Route path="/screens/players" component={Players} />
      <Route path="/screens/login" component={Login} />
      <Route path="/screens/subscribe" component={Subscribe} />
      <Redirect from="*" to="/fixtures" />
      {/* <Redirect from="*" to="/screens/players" /> */}
      {/* <Redirect from="*" to="/screens/login" /> */}
      {/* <Redirect from="*" to="/screens/subscribe" /> */}
    </Switch>
  </Router>
);
