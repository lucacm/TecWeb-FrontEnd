import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./history";
import Fixtures from "./fixtures";
import Teste from "./teste";

export default (props) => (
  <Router history={history}>
    <Switch>
      <Route exatct path="/fixtures" component={Fixtures} />
      <Route exatct path="/teste" component={Teste} />
      <Redirect from="*" to="/fixtures" />
    </Switch>
  </Router>
);
