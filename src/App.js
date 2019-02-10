import React, { Component } from 'react';
import {connect} from 'react-redux';

import Routes from 'Routes';
import {attemptAutoLogin} from 'auth/scatter_actions'
import RouteViewContainer from 'components/RouteViewContainer';
import TopBar from 'components/TopBar';

class App extends Component{
    componentDidMount() {
        this.props.dispatch(attemptAutoLogin());
    }

    render(){
      return <>
        <TopBar/>
        <RouteViewContainer>
          <Routes/>
        </RouteViewContainer>
      </>
    }
}


export default connect()(App);
