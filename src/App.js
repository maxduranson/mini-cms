import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

class LoginForm extends Component {

  render() {
    return (
      <form>
        <input type="text"/>email
        <input type="text"/>password
        <input type="submit" value="Sign in"/>
      </form>
    );
  }

}

export default App;
