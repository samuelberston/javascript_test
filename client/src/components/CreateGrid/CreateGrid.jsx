import React from 'react';
import PropTypes from 'prop-types';

class CreateGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 0,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      columns: e.target.value,
    });
  }

  render() {
    const { setColumns } = this.props;
    const { columns } = this.state;
    return (
      <div id="createGrid">
        Create a Grid
        <input type="number" max="4" onChange={this.onChange} />
        <button type="button" onClick={() => { setColumns(columns); }}>
          Create New Grid
        </button>
      </div>
    );
  }
}

CreateGrid.propTypes = {
  setColumns: PropTypes.func.isRequired,
};

export default CreateGrid;
