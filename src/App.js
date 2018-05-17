import React, { Component } from 'react';
import './App.css';

import { Intro } from './components/Intro/Intro.js';
import { Gallery } from './components/Gallery/Gallery.js';
import { Request } from './components/Request/Request.js';
import { Contact } from './components/Contact/Contact.js';
import { Nav } from './components/Nav/Nav.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(id){
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
    );
  }
}

export default App;