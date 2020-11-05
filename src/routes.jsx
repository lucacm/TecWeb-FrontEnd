import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";
import Fixtures from "./screens/fixtures";
import liveFixtures from "./screens/liveFixtures";
import futureFixtures from "./screens/futureFixtures";
import match from "./screens/match";
import Players from "../src/screens/players";
import Login from "./screens/login";
import Subscribe from "./screens/subscribe";
import Lineup from "./screens/lineup";
import Groups from "./screens/groups";

export default (props) => (
  <Router history={history}>
    <Switch>
      <Route exatct path="/fixtures" component={Fixtures} />
      <Route exatct path="/liveFixtures" component={liveFixtures} />
      <Route exatct path="/futureFixtures" component={futureFixtures} />
      <Route exatct path="/match" component={match} />
      <Route exatct path="/lineup" component={Lineup} />
      <Route path="/screens/players" component={Players} />
      <Route path="/screens/login" component={Login} />
      <Route path="/screens/subscribe" component={Subscribe} />
      <Route path="/screens/groups" component={Groups} />
      {/* <Redirect from="*" to="/fixtures" /> */}
      <Redirect from="*" to="/fixtures" />
      {/* <Redirect from="*" to="/screens/groups" /> */}
      {/* <Redirect from="*" to="/screens/players" /> */}
      {/* <Redirect from="*" to="/screens/login" /> */}
      {/* <Redirect from="*" to="/screens/subscribe" /> */}
    </Switch>
  </Router>
);
