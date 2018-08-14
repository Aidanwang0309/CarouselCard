import React from 'react';
import Media from 'react-media';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const CarouselItemLeftTitle = ({ slide }) => {
  const pickPage = slide => {
    switch (slide) {
      case '1':
        return (
          <div>
            <Row style={paginationStyle}>
              <FontAwesomeIcon
                style={{
                  float: 'left',
                  'padding-top': '7px',
                  'font-size': '32px'
                }}
                icon={faInfoCircle}
              />
              <p style={{ 'margin-bottom': '0' }}>
                intro to Milton's Insight <br />
                {slide} of 6
              </p>
            </Row>
            <Row>
              <Col xs={12} md={5}>
                <hr />{' '}
                <div className="section">
                  <Media query="(max-width: 799px)">
                    {matches =>
                      matches ? (
                        <h4 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h4>
                      ) : (
                        <h2 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h2>
                      )
                    }
                  </Media>
                  <p style={{ 'font-weight': '200', 'font-size': '16px' }}>
                    In any year, the stock market has winners, losers, and those
                    in between. This happens in both up markets and down
                    markets. And this is the way Milton thinks about stocks.
                  </p>
                </div>
              </Col>
              <Col xsHidden xs={12} md={1} />
              <Col xs={12} md={6}>
                <Image responsive src={require('../images/chart.png')} />
              </Col>
            </Row>
          </div>
        );
      case '2':
        return (
          <div>
            <Row style={paginationStyle}>
              <FontAwesomeIcon
                style={{
                  float: 'left',
                  'padding-top': '7px',
                  'font-size': '32px'
                }}
                icon={faInfoCircle}
              />
              <p style={{ 'margin-bottom': '0' }}>
                intro to Milton's Insight <br />
                {slide} of 6
              </p>
            </Row>
            <Row>
              <Col xs={12} md={5}>
                <hr />{' '}
                <div className="section">
                  <Media query="(max-width: 799px)">
                    {matches =>
                      matches ? (
                        <h4 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h4>
                      ) : (
                        <h2 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h2>
                      )
                    }
                  </Media>
                  <p style={{ 'font-weight': '200', 'font-size': '16px' }}>
                    In any year, the stock market has winners, losers, and those
                    in between. This happens in both up markets and down
                    markets. And this is the way Milton thinks about stocks.
                  </p>
                </div>
              </Col>
              <Col xsHidden xs={12} md={1} />
              <Col xs={12} md={6}>
                <Image responsive src={require('../images/chart.png')} />
              </Col>
            </Row>
          </div>
        );
      case '3':
        return (
          <div>
            <Row style={paginationStyle}>
              <FontAwesomeIcon
                style={{
                  float: 'left',
                  'padding-top': '7px',
                  'font-size': '32px'
                }}
                icon={faInfoCircle}
              />
              <p style={{ 'margin-bottom': '0' }}>
                intro to Milton's Insight <br />
                {slide} of 6
              </p>
            </Row>
            <Row>
              <Col xs={12} md={5}>
                <hr />{' '}
                <div className="section">
                  <Media query="(max-width: 799px)">
                    {matches =>
                      matches ? (
                        <h4 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h4>
                      ) : (
                        <h2 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h2>
                      )
                    }
                  </Media>
                  <p style={{ 'font-weight': '200', 'font-size': '16px' }}>
                    In any year, the stock market has winners, losers, and those
                    in between. This happens in both up markets and down
                    markets. And this is the way Milton thinks about stocks.
                  </p>
                </div>
              </Col>
              <Col xsHidden xs={12} md={1} />
              <Col xs={12} md={6}>
                <Image responsive src={require('../images/chart.png')} />
              </Col>
            </Row>
          </div>
        );
      default:
        return 'default';
    }
  };

  return pickPage(slide);
};

const HeaderfontStyle = {
  'font-weight': '300',
  color: '#4072CA'
};

const paginationStyle = {
  margin: '3% 0',
  color: '#F5774E'
};

export default CarouselItemLeftTitle;
