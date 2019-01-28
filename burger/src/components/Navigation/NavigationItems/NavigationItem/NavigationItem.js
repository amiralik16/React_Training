import React from 'react'
import PropTypes from 'prop-types'
import classes from '../NavigationItem/NavigationItem.module.css'
const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a className={props.active ? classes.active : null} href={props.link}>{props.children}</a>
    </li>
  )
}

navigationItem.propTypes = {
    link: PropTypes.string.isRequired,
}

export default navigationItem
