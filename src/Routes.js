import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "pages/home";
import IkagaiIntro from "pages/Ikagai/Intro";
import IkagaiAddItems from "pages/Ikagai/IkagaiAddItems";

const NotFound = () => <h1> No such page found</h1>;

export const Routes = () => (<Router>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/ikagai" component={IkagaiIntro}/>
    <Route exact path="/ikagai/add/:id" component={IkagaiAddItems}/>
    <Route component={NotFound} />
  </Switch>
</Router>);

export default Routes;
