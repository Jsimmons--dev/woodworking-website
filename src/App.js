import React, { Component } from 'react';
import './App.css';

import { Home } from './components/Home/Home.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, withRouter } from 'react-router-dom';
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
    const { location } = this.props;
    console.log(location);
    return (
      <div>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames={location.pathname === '/' ? "fade-out" : 'fade-right'} timeout={250}>
            <Switch location={location}>
              <Route exact path='/' component={Home} />
              <Route path='/request' component={RequestFullscreen} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App);