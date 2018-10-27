import React, { Component } from 'react';

import './App.css';

import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import Newsletter from './components/Newsletter';
import NewsletterHooks from './components/NewsletterHooks';
import ContactForm from './components/ContactForm';
import ContactFormHooks from './components/ContactFormHooks';
import DocumentTitle from './components/DocumentTitle';
import DocumentTitleHooks from './components/DocumentTitleHooks';
import WindowResize from './components/WindowResize';
import WindowResizeHooks from './components/WindowResizeHooks';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h1>Class</h1>
          <Counter />
          <hr />
          <Newsletter />
          <hr />
          <ContactForm />
          <hr />
          <DocumentTitle />
          <hr />
          <WindowResize />
        </div>
        <div>
          <h1>Hooks</h1>
          <CounterHooks />
          <hr />
          <NewsletterHooks />
          <hr />
          <ContactFormHooks />
          <hr />
          <DocumentTitleHooks />
          <hr />
          <WindowResizeHooks />
        </div>
      </div>
    );
  }
}

export default App;
