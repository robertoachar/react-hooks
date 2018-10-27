import React, { Component } from 'react';

class WindowResize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div>
        Height: {this.state.height}
        <br />
        Width: {this.state.width}
      </div>
    );
  }
}

export default WindowResize;
