import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Roberto Achar',
      email: 'robertoachar@gmail.com'
    };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Forms</h2>
        <p>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
            placeholder="Name"
          />
        </p>
        <p>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmail}
            placeholder="Email"
          />
        </p>
      </div>
    );
  }
}
