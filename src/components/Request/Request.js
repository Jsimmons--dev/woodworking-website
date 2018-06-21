import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Request.css';

export class Request extends Component {
    render() {
        return (
            <div id={'request'}>

                <div class='request-blurb parallax__layer parallax__layer--base'>
                    <p>Interested in purchasing any of the items above, or commissioning some work?</p>
                    <Link to={'/request'}><button id="request-button">send a request!</button></Link>
                </div>
                <div class='parallax__layer parallax__layer--back'>
                
                </div>
                <div class='parallax__layer parallax__layer--deep'>
                    
                </div>

            </div>
        )
    }
}