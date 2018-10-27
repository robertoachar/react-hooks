import React, { Component } from 'react';

class DocumentTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Título...'
    };

    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  componentDidMount() {
    document.title = this.state.title;
  }

  componentDidUpdate() {
    document.title = this.state.title;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleTitle}
        />
      </div>
    );
  }
}

export default DocumentTitle;
