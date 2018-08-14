import React from 'react';
import Media from 'react-media';

const blockStyle = {};

const HeaderfontStyle = {
  'font-weight': '300',
  color: '#4072CA'
};

const paginationStyle = {
  color: '#F5774E'
};

const CarouselItemLeftTitle = ({ slide }) => {
  const pickPage = slide => {
    switch (slide) {
      case '1':
        return (
          <div className="column">
            <div className="row" style={paginationStyle}>
              <p style={{ 'margin-bottom': '0' }}>intro to Milton's Insight</p>
              <p style={{ 'margin-top': '0' }}> {slide} of 6 </p>
            </div>

            <div className="row">
              <div className="col m5 s12">
                <div className="divider" />
                <div className="section">
                  <Media query="(max-width: 799px)">
                    {matches =>
                      matches ? (
                        <h6 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h6>
                      ) : (
                        <h4 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h4>
                      )
                    }
                  </Media>
                  <p className="s12">
                    In any year, the stock market has winners, losers, and those
                    in between. This happens in both up markets and down
                    markets. And this is the way Milton thinks about stocks.
                  </p>
                </div>
              </div>
              <div className="col m1" />
              <div className="col m6 s12">
                <img
                  className="responsive-img"
                  src={require('../images/chart.png')}
                />
              </div>
            </div>
          </div>
        );
      case '2':
        return (
          <div className="column">
            <div className="row" style={paginationStyle}>
              <p style={{ 'margin-bottom': '0' }}>intro to Milton's Insight</p>
              <p style={{ 'margin-top': '0' }}> {slide} of 6 </p>
            </div>

            <div className="row">
              <div className="col m5 s12">
                <div className="divider" />
                <div className="section">
                  <Media query="(max-width: 799px)">
                    {matches =>
                      matches ? (
                        <h6 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h6>
                      ) : (
                        <h4 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h4>
                      )
                    }
                  </Media>
                  <p className="s12">
                    In any year, the stock market has winners, losers, and those
                    in between. This happens in both up markets and down
                    markets. And this is the way Milton thinks about stocks.
                  </p>
                </div>
              </div>
              <div className="col m1" />
              <div className="col m6 s12">
                <img
                  className="responsive-img"
                  src={require('../images/chart.png')}
                />
              </div>
            </div>
          </div>
        );
      case '3':
        return (
          <div className="column">
            <div className="row" style={paginationStyle}>
              <p style={{ 'margin-bottom': '0' }}>intro to Milton's Insight</p>
              <p style={{ 'margin-top': '0' }}> {slide} of 6 </p>
            </div>

            <div className="row">
              <div className="col m5 s12">
                <div className="divider" />
                <div className="section">
                  <Media query="(max-width: 799px)">
                    {matches =>
                      matches ? (
                        <h6 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h6>
                      ) : (
                        <h4 className="s12 left-align" style={HeaderfontStyle}>
                          Milton thinks about stocks simply.
                        </h4>
                      )
                    }
                  </Media>
                  <p className="s12">
                    In any year, the stock market has winners, losers, and those
                    in between. This happens in both up markets and down
                    markets. And this is the way Milton thinks about stocks.
                  </p>
                </div>
              </div>
              <div className="col m1" />
              <div className="col m6 s12">
                <img
                  className="responsive-img"
                  src={require('../images/chart.png')}
                />
              </div>
            </div>
          </div>
        );
      default:
        return 'default';
    }
  };

  // const pickImage = slide => {}

  return pickPage(slide);
};

export default CarouselItemLeftTitle;
