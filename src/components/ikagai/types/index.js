import Love from './Love';
import Skill from './Skill';
import Money from './Money';
import Cause from './Cause';

import './IkigaiType.scss';

const getTypeComponent = type => ({
  love  : Love,
  skills: Skill,
  money : Money,
  cause : Cause
}[type]);

export default getTypeComponent;
