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
import Historic from "./screens/historic";
import ChangePassword from "./screens/changePassword";
import Stats from "./screens/stats";

export default (props) => (
  <Router history={history}>
    <Switch>
      <Route exact path="/fixtures" component={Fixtures} />
      <Route exact path="/liveFixtures" component={liveFixtures} />
      <Route exact path="/futureFixtures" component={futureFixtures} />
      <Route exact path="/match" component={match} />
      <Route exact path="/lineup" component={Lineup} />
      <Route exact path="/stats" component={Stats} />
      <Route path="/screens/players" component={Players} />
      <Route path="/screens/login" component={Login} />
      <Route path="/screens/subscribe" component={Subscribe} />
      <Route path="/screens/groups" component={Groups} />
      <Route path="/screens/historic" component={Historic} />
      <Route path="/screens/changePassword" component={ChangePassword} />
      {/* <Redirect from="*" to="/fixtures" /> */}
      {/* <Redirect from="*" to="/fixtures" /> */}
      {/* <Redirect from="*" to="/screens/groups" /> */}
      {/* <Redirect from="*" to="/screens/players" /> */}
      <Redirect from="*" to="/screens/login" />
      {/* <Redirect from="*" to="/screens/subscribe" /> */}
    </Switch>
  </Router>
);
