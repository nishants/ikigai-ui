import React from 'react';
import {connect} from 'react-redux';

import {withRouter} from 'react-router';
import Heading from 'components/ikagai/Heading';
import Progress from 'components/ikagai/Progress';
import {Route} from "react-router-dom";
import IntroPage from "./IntroPage";
import AddItemsPage from "./AddItemsPage";
import MapItemsPage from "./MapItemsPage";


const IkagaiHome = ({progress}) => (
    <>
      <h1>
        <Heading underline={progress === 0}/>
      </h1>
      {progress > 0   && <Progress progress={progress}/>}
      <Route exact path="/ikagai/intro" component={IntroPage}/>
      <Route exact path="/ikagai/add/:id" component={AddItemsPage}/>
      <Route exact path="/ikagai/map/:id" component={MapItemsPage}/>
    </>
);

const mapStateToProps = ({ikagai: {progress}}) => ({progress});

export default withRouter(connect(mapStateToProps)(IkagaiHome));
