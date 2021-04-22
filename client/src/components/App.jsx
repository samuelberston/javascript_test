/* eslint-disable import/extensions */
import React from 'react';

import css from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="app" className={css.app}>
        React app
      </div>
    );
  }
}

export default App;
