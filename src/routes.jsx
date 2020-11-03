import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Fixtures from "./fixtures";
import Players from "./screens/players";

export default (props) => (
  <Router>
    {/* <Route path="/fixtures" component={Fixtures} />
    <Redirect from="*" to="/fixtures" /> */}
    <Route path="/screens/players" component={Players} />
    <Redirect from="*" to="/screens/players" />
  </Router>
);
