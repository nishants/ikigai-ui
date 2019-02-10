import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import style from "./home.scss";

class Home extends Component{
    constructor(props){
        super(props);
    };

    render(){
      return <Link to='/ikagai'>Ikagai</Link>;
    }
}

export default Home;
