import React from 'react';
import './App.css';
import Terminal from './components/Terminal.js';
import Content from './components/Content.js';
import Heading from './components/Heading.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terminal: false,
      content: false,
      buttonVal: String
    };
    this.toggleTerminal = this.toggleTerminal.bind(this)
    this.toggleTerminalOff = this.toggleTerminalOff.bind(this)
    this.toggleContent = this.toggleContent.bind(this)
  }

  toggleTerminal(e) {
    this.setState({
      content: false,
      terminal: true,
      buttonVal: e.target.value
    });
    console.log(this.state.buttonVal);
  }

  toggleTerminalOff() {
    this.setState({
      content: false,
      terminal: false
    });
  }

  toggleContent(e) {
    this.setState({
      terminal: false,
      content: true,
      buttonVal: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Heading toggleTerminal={this.toggleTerminal} toggleContent={this.toggleContent}/>
        {this.state.terminal ? <Terminal buttonVal={this.state.buttonVal} toggleTerminalOff={this.toggleTerminalOff} /> : null}
        {this.state.content ? <Content buttonVal={this.state.buttonVal}/> : null}
      </div>
    );
  }
};

export default App;
