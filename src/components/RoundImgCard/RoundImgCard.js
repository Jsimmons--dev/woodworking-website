import React, { Component } from 'react';
import './RoundImgCard.css';

export class RoundImgCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { direction = 'up', children = [], size } = this.props;
        const image = <div className='img-container'><img src={this.props.imgSrc} style={{ width: size, height: size }} /></div>;
        const content = direction === 'up' ? [image, children]
            : [children, image];
        return (
            <div className='round-img-card'>
                {content}
            </div>
        )
    }
}