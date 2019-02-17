import React from 'react';
import {connect} from 'react-redux';

import {setProgress} from 'pages/Ikagai/actions';
import './ResultPage.scss';
import ikagai from "../reducer";

class IkagaiIntro extends React.Component {
  componentDidMount(){
    this.props.dispatch(setProgress(100));
  }

  render(){
    return (
        <section id='ikagai-result'>
          <div className='ikagai-chart'>
            <div className='ikagai-chart-cell love'>
              <label className='ikagai-chart-cell-caption'> Things you love </label>
            </div>
            <div className='ikagai-chart-cell mission'>
              <label className='ikagai-chart-cell-caption'> Mission </label>
            </div>
            <div className='ikagai-chart-cell cause'>
              <label className='ikagai-chart-cell-caption'> Things you can contribute to the world </label>
            </div>
            <div className='ikagai-chart-cell passion'>
              <label className='ikagai-chart-cell-caption'> Passion </label>
            </div>
            <div className='ikagai-chart-cell purpose'>
              <label className='ikagai-chart-cell-caption'> Ikagai </label>
            </div>
            <div className='ikagai-chart-cell vocation'>
              <label className='ikagai-chart-cell-caption'> Vocations </label>
            </div>
            <div className='ikagai-chart-cell skills'>
              <label className='ikagai-chart-cell-caption'> Things you are good at </label>
            </div>
            <div className='ikagai-chart-cell profession'>
              <label className='ikagai-chart-cell-caption'> Professions </label>
            </div>
            <div className='ikagai-chart-cell money'>
              <label className='ikagai-chart-cell-caption'> Things you can do to make money </label>
            </div>
          </div>
        </section>
    );
  }
};

const mapStateToProps = ({ikagai}) => {

  const joinMapping = mapping => {label: [mapping.source.label, mapping.target.label].join(" ")};
  const findMappingWithSource = (mappings, item) => mappings.find(m=> m.source.label === item.label);
  const findMappingWithTarget = (mappings, item) => mappings.find(m=> m.target.label === item.label);

  const findLinks = ({from, to}) => from.map(mapping => ({
    start : mapping,
    end   : findMappingWithSource(to, mapping.target)
  })).filter(link => link.target);

  const linkToMapping = link  => ({source: link.start.source, target: link.end.target});

  console.log(ikagai, ikagai.itemsMapped.skills_money);
  const loveCauseMappings = findLinks({
    from: ikagai.itemsMapped.love_skills,
    to  : ikagai.itemsMapped.skills_money
  }).map(linkToMapping);

  console.log("loveCauseMappings", loveCauseMappings);
  //love money
  // find all targets in love_skills, for each source in skills_money

  // love cause // find all targets in love money

  return {
      // love    : ikagai.love,
      // skills  : ikagai.skills,
      // money   : ikagai.money,
      // cause   : ikagai.cause,
      // passion : ikagai.love_skills.map(joinMapping),
      // profession  : ikagai.skills_money.map(joinMapping),
      // vocatoin    : ikagai.money_cause.map(joinMapping),
      // purpose    : [],
  };
};

export default connect(mapStateToProps)(IkagaiIntro);
