import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import CarouselItemLeftTitle from './components/CarouselItemLeftTitle';
import { Modal } from 'react-bootstrap';
import './CarouselList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight
} from '@fortawesome/free-solid-svg-icons';

class CarouselList extends Component {
  state = {
    show: true
  };

  closeHandler = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Modal bsSize="large" show={this.state.show} onHide={this.closeHandler}>
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <button style={leftButtonStyle} onClick={previousSlide}>
              <FontAwesomeIcon icon={faChevronCircleLeft} />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button style={rightButtonStyle} onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </button>
          )}
          style={borderStyle}
          wrapAround="true"
        >
          <CarouselItemLeftTitle slide="1" />
          <CarouselItemLeftTitle slide="2" />
          <CarouselItemLeftTitle slide="3" />
        </Carousel>
      </Modal>
    );
  }
}

const borderStyle = {
  background: 'linear-gradient(#F5774E 3%, #fff 1%)',
  margin: 'auto',
  padding: '3%',
  height: '500px'
};

const leftButtonStyle = {
  position: 'relative',
  right: '100%',
  border: 'none',
  background: 'transparent',
  'font-size': '36px',
  color: 'gainsboro'
};

const rightButtonStyle = {
  position: 'relative',
  left: '100%',
  border: 'none',
  background: 'transparent',
  'font-size': '36px',
  color: 'gainsboro'
};

export default CarouselList;
