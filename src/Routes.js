import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "pages/home";
import IntroPage from "pages/Ikagai/IntroPage";
import AddItemsPage from "pages/Ikagai/AddItemsPage";

const NotFound = () => <h1> No such page found</h1>;

export const Routes = () => (<Router>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/ikagai" component={IntroPage}/>
    <Route exact path="/ikagai/add/:id" component={AddItemsPage}/>
    <Route component={NotFound} />
  </Switch>
</Router>);

export default Routes;
