import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.handleCounter = this.handleCounter.bind(this);
  }

  handleCounter() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleCounter}>
          Increment: {this.state.count}
        </button>
      </div>
    );
  }
}
