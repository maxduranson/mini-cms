import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

class LoginForm extends Component {

  render() {
    return (
      <form>
        <label>Email</label>
        <input type="text"/>
        <label>Password</label>
        <input type="text"/>
        <input type="submit" value="Sign in"/>
      </form>
    );
  }

}

export default App;
export {LoginForm};
