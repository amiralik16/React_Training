import React from 'react'
import Logo from '../../Logo/Logo';
import classes from '../Navbar/Navbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
// import Logo from '../../assets/logo.png'

const navbar = (props) => {
    // return (
    //     <div>
    //         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //             <a className="navbar-brand" href="https://google.com"><Logo/></a>
    //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarNav">
    //                 <ul className="navbar-nav">
    //                     <li className="nav-item active">
    //                         <a className="nav-link" href="https://google.com">Home <span className="sr-only">(current)</span></a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="https://google.com">Features</a>
    //                     </li>
    //                     <li className="nav-item">
    //                         <a className="nav-link" href="https://google.com">Pricing</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </nav>
    //     </div>
    // )
    return (
        <header className={classes.Navbar}>
            <DrawerToggle clicked = {props.toggleDrawer}/>
            <p><Logo/></p>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
            {/* </Logo > */}
        </header>
    )
}

export default navbar
