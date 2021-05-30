import React, {useEffect} from 'react';
import classes from './Home.module.css';
import {connect} from "react-redux";
import * as actions from '../../store/actionTypes';

const home = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() =>{
        props.onLoad();
    })

    console.log(process.env.NODE_ENV)

    return (
        <div className={classes.Home}>
            <h1>{props.children}</h1>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch({type: actions.REDUX_TEST})
    }
}

export default connect(null, mapDispatchToProps)(home);