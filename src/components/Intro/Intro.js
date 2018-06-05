import React, { Component } from 'react';
import './Intro.css';


export class Intro extends Component {
    render() {
        return (
            <div id={'intro'}>
                <div class='blurb'>
                    <h1> Chris Boyle Woodworking</h1>
                    <p>This is a place where Chris Boyle comes to make art.</p>
                </div>
            </div>
        )
    }
}