import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: null,
      boxes: null,
    };
  }

  render() {
    return (
      <div id="app">
        the react app is rendering
      </div>
    );
  }
}

export default App;
