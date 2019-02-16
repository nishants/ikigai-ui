import React from 'react';
import {connect} from 'react-redux';

import './IkagaiIntro.scss';
import IntroImage from './IntroImage.svg'
import LinkButton from 'components/Form/LinkButton';
import {setProgress} from 'pages/Ikagai/actions';

class IkagaiIntro extends React.Component {
  componentDidMount(){
    this.props.dispatch(setProgress(0));
  }

  render(){
    return (
        <section id='ikagai-intro'>
          <img src={IntroImage} alt='Ikigai'/>
          <p>
            Ikigai is a Japanese word whose meaning translates roughly to a reason for being, encompassing joy, a sense of purpose and meaning and a feeling of well-being. The word derives from iki, meaning life and kai, meaning the realisation of hopes and expectations.
          </p>
          <LinkButton to={'/ikagai/add/love'} label='Start'/>
        </section>
    );
  }
}

export default connect()(IkagaiIntro);
