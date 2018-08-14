import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import CarouselItemLeftTitle from './components/CarouselItemLeftTitle';
import 'materialize-css/dist/css/materialize.min.css';

const borderStyle = {
  background: 'linear-gradient(#F5774E 3%, #fff 1%)',
  margin: 'auto',
  width: '70%',
  border: '0.5px solid',
  'border-radius': '10px',
  padding: '3%',
  height: '500px'
};

class CarouselList extends Component {
  render() {
    return (
      <Carousel style={borderStyle} wrapAround="true">
        <CarouselItemLeftTitle slide="1" />
        <CarouselItemLeftTitle slide="2" />
        <CarouselItemLeftTitle slide="3" />
      </Carousel>
    );
  }
}

export default CarouselList;
