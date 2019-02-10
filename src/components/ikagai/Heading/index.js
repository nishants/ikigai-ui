import React from 'react';
import './Heading.scss';
import {classIf} from 'utils';

const classNames = props => `${classIf({if: props.underline, className: 'underline'})}`;

const Heading = props => (
    <div className={`ikagai-heading-element ${classNames(props)}`}>
      Ikagai
    </div>
);

export default Heading;
