import React, { Component } from 'react';
import './Home.css';
import { Intro } from '../Intro/Intro.js';
import { Gallery } from '../Gallery/Gallery.js';
import { Request } from '../Request/Request.js';
import { Contact } from '../Contact/Contact.js';
import { Nav } from '../Nav/Nav.js';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.scrollTo = this.scrollTo.bind(this);
        this.state = { request: false };
    }

    scrollTo(id) {
        return () => document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <div className="App">
                <Nav scrollFunc={this.scrollTo} />
                <Intro />
                <Gallery />
                <Request />
                <Contact />
            </div>
        )
    }
}