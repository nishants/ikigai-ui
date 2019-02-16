import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "pages/home";
import Ikagai from "pages/Ikagai";
import IntroPage from "pages/Ikagai/IntroPage";
import AddItemsPage from "pages/Ikagai/AddItemsPage";
import MapItemsPage from "pages/Ikagai/MapItemsPage";

const NotFound = () => <h1> No such page found</h1>;

export const Routes = () => (<Router>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/ikagai" component={Ikagai}/>
    <Route component={NotFound} />
  </Switch>
</Router>);

export default Routes;
