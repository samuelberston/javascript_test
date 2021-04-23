/* eslint-disable import/extensions */
import React from 'react';

import Header from './Header/Header.jsx';

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
        <Header />
      </div>
    );
  }
}

export default App;
