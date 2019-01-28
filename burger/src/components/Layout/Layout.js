import React, { Component } from 'react'
import Navbar from '../Navigation/Navbar/Navbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


export class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    toggleSideDrawer = () =>{
        this.setState((prevState) => {return {showSideDrawer: !prevState.showSideDrawer}})
    }
    render() {
        return (
            <>
                {/* Navbar */}
                <SideDrawer show={this.state.showSideDrawer} toggle={this.toggleSideDrawer} />
                <Navbar toggleDrawer={this.toggleSideDrawer}/>
                <main className='pt-5 mt-5'>
                    {this.props.children}
                </main>

            </>
        )
    }
}

export default Layout
