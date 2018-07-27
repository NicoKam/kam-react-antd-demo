import React, { Component } from 'react';
import store from 'store';

import logo from './logo.svg';
import './App.css';
import './App.less';

console.log(store);

class App extends Component {
  componentDidMount() {
    this.loadData();
    console.log('did mount');
    this.setState({});
    this.setState({});
    this.setState({});
    this.setState({});
    this.setState({a:1});
    console.log('did mount end',this.state);
  }

  loadData = () =>
    new Promise(resolve => {
      setTimeout(() => {
        console.log('setTimeout');
        this.setState({});
        this.setState({});
        this.setState({});
        this.setState({});
        this.setState({a:2});
        console.log('setTimeout end',this.state);
      }, 3000);
    });

  render() {
    console.log('render');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
