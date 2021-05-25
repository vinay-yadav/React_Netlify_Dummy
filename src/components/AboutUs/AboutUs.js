import React from 'react';
import classes from './AboutUs.module.css';

const aboutUs = props => (
    <div className={classes.About}>
        <h1>{props.children}</h1>
    </div>
);

export default aboutUs;