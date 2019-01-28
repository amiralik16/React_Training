import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.module.css'

const button = (props) => {
  return (
    <button onClick={props.clicked} className={[classes.Button,classes[props.type]].join(' ')}>{props.children}</button>
  )
}

button.propTypes = {
  type:PropTypes.string,
  clicked: PropTypes.func,
}

export default button
