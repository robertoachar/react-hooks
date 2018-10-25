import React, { Component } from 'react';

import './App.css';

import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import Form from './components/Form';
import FormHooks from './components/FormHooks';
import ContactForm from './components/ContactForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h1>Classic</h1>
          <Counter />
          <hr />
          <Form />
        </div>
        <div>
          <h1>Hooks</h1>
          <CounterHooks />
          <hr />
          <FormHooks />
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default App;
