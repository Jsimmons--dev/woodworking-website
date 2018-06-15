import React, { Component } from 'react';
import './Request.css';

export class Request extends Component {
    render(){
        return (
            <div id={'request'}>
            
            <div class='request-blurb'>
                <p>Interested in purchasing any of the items above, or commisioning some work?</p>  
                <button id="request-button">send a request!</button>
            </div>
            
            </div>
        )
    }
}