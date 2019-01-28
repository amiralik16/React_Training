import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'


const buildControls = (props) => {
    const labels=['salad','bacon','cheese','meat']

  return (
    <div className={classes.BuildControls}>
    {labels.map(label=>{
        return <BuildControl add={props.add} remove={props.remove} key = {label} label = {label} disabler={props.disabler}/>
    })}
    {console.log()}
    <button className={classes.OrderButton} disabled={Object.keys(props.disabler()).map(key => {return props.disabler()[key]}).reduce((sum,el)=> sum && el,true)} onClick={props.modalTrigger}>Order Now</button>
    </div>
  )
}

export default buildControls
