import React from 'react'
// import PropTypes from 'prop-types'
import NavigationItem from './NavigationItem/NavigationItem';
import classes from '../NavigationItems/NavigationItems.module.css'
const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  )
}

// navigationItems.propTypes = {

// }

export default navigationItems
