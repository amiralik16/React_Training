import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from '../SideDrawer/SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    const assigndClasses=props.show?[classes.SideDrawer, classes.Open]:[classes.SideDrawer, classes.Close]
    return (
        <>
        {console.log(props.show)}
        <Backdrop show={props.show} cancel={props.toggle}/>
        <div className={assigndClasses.join(' ')}>
            <div className='mb-5'>
                <Logo />
            </div>

            <nav>
                <NavigationItems />
            </nav>
        </div>
        </>
    )
}

sideDrawer.propTypes = {

}

export default sideDrawer
