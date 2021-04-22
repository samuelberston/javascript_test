import React from 'react';
import PropTypes from 'prop-types';

import AddBox from './AddBox.jsx';
import Box from './Box.jsx';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    const { columns } = this.props;
    this.state = {
      columns,
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }

  addBox(color) {
    const { boxes } = this.state;
    const newBox = { index: boxes.length, color };
    boxes.push(newBox);
    this.setState({
      boxes,
    });
  }

  deleteBox(index) {
    const { boxes } = this.state;
    boxes.splice(index, 1);
    this.setState({
      boxes,
    });
  }

  render() {
    const { columns, boxes } = this.state;
    const gridCSS = {
      display: 'grid',
      gridTemplateColumns: columns,
    };
    return (
      <div id="gridContainer">
        <AddBox addBox={this.addBox} />
        <div id="grid" style={gridCSS}>
          {boxes.map((box, i) => (
            <Box index={i} color={box.color} deleteBox={this.deleteBox} />
          ))}
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  columns: PropTypes.number.isRequired,
};

export default Grid;
