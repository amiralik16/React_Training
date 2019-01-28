import React from 'react'
import LogoPic from '../../assets/burger-logo.png'
import classes from '../Logo/Logo.module.css'
const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={LogoPic} alt='fak' />
        </div>
    )
}

export default logo
