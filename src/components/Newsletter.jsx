import React, { Component } from 'react';

class Newsletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'robertoachar@gmail.com'
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleClick() {
    console.log(this.state.email);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button type="button" onClick={this.handleClick}>
          Enviar
        </button>
      </div>
    );
  }
}

export default Newsletter;
