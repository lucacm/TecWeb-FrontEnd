import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";
import Fixtures from "./screens/fixtures";
import liveFixtures from "./screens/liveFixtures";
import futureFixtures from "./screens/futureFixtures";
import match from "./screens/match";
import Players from "../src/screens/players";

export default (props) => (
  <Router history={history}>
    <Switch>
      <Route exatct path="/fixtures" component={Fixtures} />
      <Route exatct path="/liveFixtures" component={liveFixtures} />
      <Route exatct path="/futureFixtures" component={futureFixtures} />
      <Route exatct path="/match" component={match} />
      <Route path="/screens/players" component={Players} />
      <Redirect from="*" to="/fixtures" />
      {/* <Redirect from="*" to="/screens/players" /> */}
    </Switch>
  </Router>
);
