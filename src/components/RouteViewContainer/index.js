import React from 'react';
import './RouteViewContainer.scss';

const RouteViewContainer = props => (
    <article className='route-view-container'>{props.children}</article>
);

export default RouteViewContainer;
