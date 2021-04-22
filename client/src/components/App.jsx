/* eslint-disable import/extensions */
import React from 'react';

import Header from './Header/Header.jsx';
import CreateGrid from './CreateGrid/CreateGrid.jsx';
import Grid from './Grid/Grid.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 0,
    };
    this.setColumns = this.setColumns.bind(this);
  }

  setColumns(columns) {
    this.setState({
      columns,
    });
  }

  render() {
    const { columns } = this.state;
    return (
      <div id="app">
        <Header />
        <CreateGrid setColumns={this.setColumns} />
        <Grid columns={parseInt(columns, 10)} />
      </div>
    );
  }
}

export default App;
