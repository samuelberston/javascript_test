import React from 'react';
import PropTypes from 'prop-types';

import css from './Carousel.module.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      url: null,
    };
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  componentDidMount() {
    const { imgs } = this.props;
    this.setState({
      url: imgs[0],
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
      url: imgs[index],
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
      url: imgs[index],
    });
  }

  render() {
    const { index, url } = this.state;
    return (
      <div id="carousel" className={css.carousel}>
        <button id="left-nav" type="button" onClick={this.leftClick}>
          <i className="fa fa-chevron-left" />
        </button>
        <div id="img-display" className={css.imgDisplay}>
          <div id={index} className={css.img}>
            <img src={url} alt="" />
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
  imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
