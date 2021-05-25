import React from 'react';
import classes from './Home.module.css';

const home = props => (
    <div className={classes.Home}>
        <h1>{props.children}</h1>
    </div>
);

export default home;