import React, { Component } from 'react';
import './Gallery.css';

import Slider from 'react-slick';

export class Gallery extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            variableWidth: true,
            centerMode: true
        };

        let urls = [
            'board.jpg',
            'cutting.jpg',
            'hank.jpg',
        ]
        let imgs = urls.map(url => (
            <div>
                <img style={{ height: '80vh', 'padding': '2vh 1vw 0 0vw'}} src={'../../assets/' + url} />
            </div>
        ));
        return (
            <div id={'gallery'} style={{
                height: '86vh',
            }}
            >
                <Slider style={{ width: '50vw' }} {...settings}>
                    {imgs}
                </Slider>
            </div>
        )
    }
}