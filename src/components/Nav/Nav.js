import React, { Component } from 'react';
import './Nav.css';

export class Nav extends Component {
    
    constructor(props){
        super(props);
}


    render(){
        return (
            <nav>
            <p className='navItem' onClick={this.props.scrollFunc('#intro')}>Intro</p>
            <p className='navItem' onClick={this.props.scrollFunc('#gallery')}>Gallery</p>
            <p className='navItem' onClick={this.props.scrollFunc('#request')}>Request</p>
            <p className='navItem' onClick={this.props.scrollFunc('#contact')}>Contact</p>
            </nav>
        )
    }
}