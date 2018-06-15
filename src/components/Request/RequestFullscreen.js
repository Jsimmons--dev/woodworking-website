import React, { Component } from 'react';
import './RequestFullscreen.css';

export class RequestFullscreen extends Component {
    //TODO: this component will be navigated to with react router
    // it will list chris' availble items and have a form
    // to commision something new

    render(){
        return (
            <div id={'request-fullscreen'}>
                
                Request page
                
                <div className='item'>
                    <img src='https://i.redd.it/3p9fromfzbn01.png'/>
                    <div className='info'>
                        <div>
                            <h2>Rustic Recliner</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </p>
                        </div>
                        <div>
                            <p>interested?</p>
                            <input id='checkBox' type='checkbox'/>
                        </div>
                    </div>  
                </div>

                <div className='item'>
                    <img src='https://i.redd.it/3p9fromfzbn01.png'/>
                    <div className='info'>
                        <div>
                            <h2>Sanded Side Table</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                        </div>
                        <div>
                            <p>interested?</p>
                            <input id='checkBox' type='checkbox'/>
                        </div>
                    </div>  
                </div>

                <div className='item'>
                    <img src='https://i.redd.it/3p9fromfzbn01.png'/>
                    <div className='info'>
                        <div>
                            <h2>Koa Cutting Board</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                        </div>
                        <div>
                            <p>interested?</p>
                            <input id='checkBox' type='checkbox'/>
                        </div>
                    </div>  
                </div>

                <div className='item'>
                    <img src='https://i.redd.it/3p9fromfzbn01.png'/>
                    <div className='info'>
                        <div>
                            <h2>Ancient Armoire</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                        </div>
                        <div>
                            <p>interested?</p>
                            <input id='checkBox' type='checkbox'/>
                        </div>
                    </div>  
                </div>

                <div className='item'>
                    <img src='https://i.redd.it/3p9fromfzbn01.png'/>
                    <div className='info'>
                        <div>
                            <h2>Finished Finish Floorboards</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                        </div>
                        <div>
                            <p>interested?</p>
                            <input id='checkBox' type='checkbox'/>
                        </div>
                    </div>  
                </div>
                
                {/* This is will a "other" for listed at the bottom of
            items chris has listed the person will fill it out the form and send it
            it will format an email and shoot it to chris to get back to them*/}
                <div className='request-form'>request form</div>

                
                <div className='button-item'>  
                    <button id='send-request'>submit button</button>
                </div>
            
            </div>
        )
    }
}