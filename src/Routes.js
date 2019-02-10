import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home";

const NotFound = () => <h1> No such page found</h1>;

export const Routes = () => (<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
</Router>);

export default Routes;
