import React from 'react';
import './IkagaiIntro.scss';
import IntroImage from './IntroImage.svg'
import LinkButton from 'components/Form/LinkButton';
import Heading from 'components/ikagai/Heading';

const IkagaiIntro = props => (
    <section id='ikagai-intro'>
      <h1>
        <Heading underline={true}/>
      </h1>
      <img src={IntroImage} alt='Ikigai'/>
      <p>
        Ikigai is a Japanese word whose meaning translates roughly to a reason for being, encompassing joy, a sense of purpose and meaning and a feeling of well-being. The word derives from iki, meaning life and kai, meaning the realisation of hopes and expectations.
      </p>
      <LinkButton to={'ikagai/add/love'} label='Start'/>
    </section>
);

export default IkagaiIntro;
