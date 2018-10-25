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
        <p>
          <span>Counter: {this.state.count}</span>
        </p>
        <p>
          <button type="button" onClick={this.handleCounter}>
            Increment
          </button>
        </p>
      </div>
    );
  }
}
