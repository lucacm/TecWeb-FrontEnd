import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Fixtures from "./fixtures";

export default (props) => (
  <Router>
    <Route path="/fixtures" component={Fixtures} />
    <Redirect from="*" to="/fixtures" />
  </Router>
);
