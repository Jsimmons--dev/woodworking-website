import React, { Component } from 'react';
import './RoundImgCard.css';

export class RoundImgCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { direction = 'up', children = [], size = '100px' } = this.props;
        const image = <div className='img-container' style={{height:size, width: size}}><img src={this.props.imgSrc} /></div>;
        const content = direction === 'up' ? [image, children]
            : [children, image];
        return (
            <div className='round-img-card'>
                {content}
            </div>
        )
    }
}