import React, { Component } from 'react';
import './Gallery.css';
import '../RoundImgCard/RoundImgCard.js';

import Slider from 'react-slick';
import { RoundImgCard } from '../RoundImgCard/RoundImgCard.js';

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
            'board_low.jpg',
            'cutting_low.jpg',
            'hank_low.jpg',
        ]
        let imgs = urls.map(url => (
            <div>
                <img style={{ height: '30vh', 'padding': '2vh 1vw 0 0vw' }} src={'../../assets/' + url} />
            </div>
        ));
        return (
            <div id={'gallery'} style={{
                height: '86vh',
            }}
            >
                <RoundImgCard imgSrc='../../assets/board_low.jpg'>
                    <p>Blurb</p>
                </RoundImgCard>
                <RoundImgCard imgSrc='../../assets/board_low.jpg' direction='down'>
                    <p>Blurb</p>
                </RoundImgCard>
                {/* <Slider style={{ width: '50vw' }} {...settings}>
                    {imgs}
                </Slider> */}
            </div>
        )
    }
}