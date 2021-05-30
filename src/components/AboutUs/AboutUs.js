import React from 'react';
import classes from './AboutUs.module.css';

const aboutUs = props => (
    <React.Fragment>
        <div className={classes.About}>
            <h1>{props.children}</h1>
        </div>
    </React.Fragment>

);

export default aboutUs;