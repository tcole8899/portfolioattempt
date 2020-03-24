import React from 'react';
import './App.css';
import Terminal from './components/Terminal.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terminal: false,
      buttonVal: String
    };
    this.toggleTerminal = this.toggleTerminal.bind(this)
    this.toggleTerminalOff = this.toggleTerminalOff.bind(this)
  }

  toggleTerminal(e) {
    this.setState({
      terminal: true,
      buttonVal: e.target.value
    });
    console.log(this.state.buttonVal);
  }

  toggleTerminalOff() {
    this.setState({
      terminal: false
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p >Tyler Cole Portfolio</p>
          <div className="navBar">
            <button className="navBut" value="aboutMe" onClick={this.toggleTerminal}>About Me</button>
            <button className="navBut" value="Math" onClick={this.toggleTerminal}>Math</button>
            <button className="navBut" value="C++" onClick={this.toggleTerminal}>C++</button>
            <button className="navBut" value="Python&SQL" onClick={this.toggleTerminal}>Python & SQL</button>
            <button className="navBut" value="ReactJS" onClick={this.toggleTerminal}>ReactJS</button>
          </div>
        </header>
        {this.state.terminal ? <Terminal buttonVal={this.state.buttonVal} toggleTerminalOff={this.toggleTerminalOff} /> : null}
      </div>
    );
  }
};

export default App;
