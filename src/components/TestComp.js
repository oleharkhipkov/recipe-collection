import React, { Component } from 'react';

class TestComp extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    if (this.state.show) {
      this.setState({
        show: false,
      });
    } else {
      this.setState({
        show: true,
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleDisplay}>Click!!</button>
        {this.state.show && <p>Show Me!!!</p>}
      </div>
    );
  }
}

export default TestComp;
