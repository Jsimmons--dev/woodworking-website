import React, { Component } from 'react';
import './App.css';

import { Home } from './components/Home/Home.js';
import { Main } from './components/Main/Main.js';
import { Switch, Route } from 'react-router-dom';
import { RequestFullscreen } from './components/RequestFullscreen/RequestFullscreen';

class App extends Component {

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
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/request' component={RequestFullscreen} />
        </Switch>
        <Main />
      </div>
    );
  }
}

export default App;