import React from 'react';
import PropTypes from 'prop-types';

import css from './Carousel.module.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      url: '',
      caption: '',
    };
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  componentDidMount() {
    const { imgs } = this.props;
    this.setState({
      url: imgs[0].url,
      caption: imgs[0].caption,
    });
  }

  leftClick() {
    const { imgs } = this.props;
    let { index } = this.state;
    if (index !== 0) {
      index -= 1;
    } else {
      index = imgs.length - 1;
    }
    this.setState({
      index,
      url: imgs[index].url,
      caption: imgs[index].caption,
    });
  }

  rightClick() {
    const { imgs } = this.props;
    let { index } = this.state;
    if (index !== imgs.length - 1) {
      index += 1;
    } else {
      index = 0;
    }
    this.setState({
      index,
      url: imgs[index].url,
      caption: imgs[index].caption,
    });
  }

  render() {
    const { index, url, caption } = this.state;
    return (
      <div id="carousel" className={css.carousel}>
        <button id="left-nav" type="button" onClick={this.leftClick}>
          <i className="fa fa-chevron-left" />
        </button>
        <div className={css.imgDisplayContainer}>
          <div id="img-display" className={css.imgDisplay}>
            <div id={index} className={css.img}>
              <img src={url} alt="" />
            </div>
          </div>
          <div id="caption" className={css.caption}>
            {caption}
          </div>
        </div>
        <button id="right-nav" type="button" onClick={this.rightClick}>
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carousel;
