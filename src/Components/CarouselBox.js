import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import progImg from '../assets/prog.jpg';
import codeImg from '../assets/code.jpg';
import dcodeImg from '../assets/dcode.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ progImg }
                        alt="Code"
                    />
                    <Carousel.Caption>
                        <h3>Code image</h3>
                        <p>Whatever you want</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ dcodeImg }
                        alt="Code"
                    />
                    <Carousel.Caption>
                        <h3>Code image</h3>
                        <p>Whatever you want</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ codeImg }
                        alt="Code"
                    />
                    <Carousel.Caption>
                        <h3>Code image</h3>
                        <p>Whatever you want</p>
                    </Carousel.Caption>
                </Carousel.Item>        
            </Carousel>
        )
    }
}
