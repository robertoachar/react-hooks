import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Roberto Achar',
      email: 'robertoachar@gmail.com',
      message: 'Mensagem...'
    };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleMessage(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleName} />
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <textarea
          rows="3"
          value={this.state.message}
          onChange={this.handleMessage}
        />
      </div>
    );
  }
}
