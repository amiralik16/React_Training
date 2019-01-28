import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ValidationComponent from './Assignment2/ValidationComponent'
import CharComponent from './Assignment2/CharComponent'

class App extends Component {
  state = {
    len: 0,
    input: '',
  };

  inputChangeHandler = (e) =>{
    this.setState({len: e.target.value.length, input:e.target.value})
  };

  charRenderer = () =>{
    const chars = this.state.input.split('');
    return chars.map((c,index) => (
      <CharComponent char={c} id={index} key={index} handler={this.charDeleteHandler}/>
    ))
  }

  charDeleteHandler = (e) => {
    const chars = this.state.input.split('');
    chars.splice(e.target.id,1);
    // console.log(chars.join(''));
    this.setState({input:chars.join(''), len: chars.join('').length})
  }

  render() {
    return (
      <div className="App container jumbotron">
        <input onChange={this.inputChangeHandler} value = {this.state.input}/>
        <p>{this.state.len}</p>
        <ValidationComponent len={this.state.len}/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {this.charRenderer()}
      </div>
    );
  }
}

export default App;
