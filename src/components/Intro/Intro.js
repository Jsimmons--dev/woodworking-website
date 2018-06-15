import React, { Component } from 'react';
import './Intro.css';


export class Intro extends Component {
    render() {
        return (
            <div id={'intro'}>
                <div class='blurb'>
                    <h1> CB Woodworks</h1>
                    {/* <h6 class='est'>Est. 2014</h6> */}
                    <p>This is a place where Chris Boyle comes to make art.</p>
                </div>
            </div>
        )
    }
}