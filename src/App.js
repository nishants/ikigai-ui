import React, { Component } from 'react';
import {connect} from 'react-redux';

import Routes from 'Routes';
import {attemptAutoLogin} from 'auth/scatter_actions'

class App extends Component{
    componentDidMount() {
        this.props.dispatch(attemptAutoLogin());
    }

    render(){
      return <Routes/>;
    }
}


export default connect()(App);
