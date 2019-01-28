import React from 'react'
import classes from './BuildControl.module.css'

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label.capitalize()} </div>
            <button type="button" className={classes.Less} onClick={()=>props.add(props.label)}>More</button>
            <button type="button" className={classes.More} onClick={()=>props.remove(props.label)} disabled={props.disabler()[props.label]}>Less</button>

        </div>
    )
}

export default buildControl
