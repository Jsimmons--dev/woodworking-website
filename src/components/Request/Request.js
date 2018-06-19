import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Request.css';

export class Request extends Component {
    render() {
        return (
            <div id={'request'}>

                <div class='request-blurb'>
                    <p>Interested in purchasing any of the items above, or commissioning some work?</p>
                    <Link to={'/request'}><button id="request-button">send a request!</button></Link>
                </div>

            </div>
        )
    }
}