import React from 'react';
import PropTypes from 'prop-types';

class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'pink',
    };
    this.colorSelect = this.colorSelect.bind(this);
  }

  colorSelect(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { addBox } = this.props;
    return (
      <div id="addBox">
        Add a Box
        <input id="color" type="color" onChange={this.colorSelect} />
        <button type="button" onClick={addBox}>
          ADD
        </button>
      </div>
    );
  }
}

AddBox.propTypes = {
  addBox: PropTypes.func.isRequired,
};

export default AddBox;
