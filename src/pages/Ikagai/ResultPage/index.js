import React from 'react';
import {connect} from 'react-redux';

import {setProgress} from 'pages/Ikagai/actions';
import './ResultPage.scss';

import {Tag} from 'antd';

class IkagaiChart extends React.Component {
  componentDidMount(){
    this.props.dispatch(setProgress(100));
  }

  render(){
    const
        {result, ikagai} = this.props;

    console.log('result', result);

    return (
        <section id='ikagai-result'>
          <div className='ikagai-chart'>
            <div className='ikagai-chart-cell love'>
              <label className='ikagai-chart-cell-caption'> Things you love </label>
              {ikagai.addedItems.love.map(love => <Tag key={love.label}>{love.label}</Tag>)}
            </div>
            <div className='ikagai-chart-cell mission'>
              <label className='ikagai-chart-cell-caption'> Mission </label>
              {result.missions.map(label => <Tag key={label}>{label}</Tag>)}
            </div>
            <div className='ikagai-chart-cell cause'>
              <label className='ikagai-chart-cell-caption'> Things you can contribute to the world </label>
            </div>
            <div className='ikagai-chart-cell passion'>
              <label className='ikagai-chart-cell-caption'> Passion </label>
              {result.passions.map(label => <Tag key={label}>{label}</Tag>)}
            </div>
            <div className='ikagai-chart-cell purpose'>
              <label className='ikagai-chart-cell-caption'> Ikagai </label>
              {result.purpose.map(label => <Tag key={label}>{label}</Tag>)}
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
  const result = {
    love: {},
    passions: [],
    missions: [],
    purpose: [],
  }
  const
      isPassion = items => items.includes('love') && items.includes('skills'),
      isMission = items => items.includes('love') && items.includes('cause'),
      isIkagai  = items => items.filter(dup => items.indexOf(dup) !== -1).length === 4;

  ikagai.addedItems.love.forEach(item => {
    result.love[item.label] = ['love'];
    const loveSkills = ikagai.itemsMapped.love_skills;
    const loveSkillsForItem = loveSkills.filter(loveSkill => loveSkill.source.label === item.label);
    if(loveSkillsForItem.length){
      result.love[item.label].push('skills');
      const skillsForLoveItem = loveSkillsForItem.map(mapping => mapping.target.label);
      const moneyForLoveItem  = ikagai.itemsMapped.skills_money.filter(mapping => skillsForLoveItem.includes(mapping.source.label)).map(mapping => mapping.target.label);
      if(moneyForLoveItem.length){
        result.love[item.label].push('money');
        const causeForLoveItem = ikagai.itemsMapped.money_cause.filter(mapping => moneyForLoveItem.includes(mapping.source.label)).map(mapping => mapping.target.label);
        if(causeForLoveItem){
          result.love[item.label].push('cause');
        }

      }
    }
  });

  Object.entries(result.love).forEach(loveEntry => {
    if(isIkagai(loveEntry[1])){
      result.purpose.push(loveEntry[0])
    }
    else if(isPassion(loveEntry[1])){
      result.passions.push(loveEntry[0])
    }else if(isMission(loveEntry[1])){
      result.missions.push(loveEntry[0])
    }
  });

  return {
    ikagai,
    result
  };
};

export default connect(mapStateToProps)(IkagaiChart);
