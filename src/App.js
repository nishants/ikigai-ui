import React, { Component } from 'react';
import {connect} from 'react-redux';

import Home from 'pages/home'
import {attemptAutoLogin} from 'auth/scatter_actions'

class App extends Component{
    componentDidMount() {
        this.props.dispatch(attemptAutoLogin());
    }

    render(){
        return (
            <Home/>
        );
    }
}

alert(`${process.env.ENV_FLAG}`);

export default connect()(App);
