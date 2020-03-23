import React from 'react';
import cmdimg from './components/cmdimg.png';
import x from './components/x.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terminal: false
    };
    this.toggleTerminal = this.toggleTerminal.bind(this)
  }

  toggleTerminal(){
    this.setState({
      terminal: !this.state.terminal
    });
  }

  renderTerminal () {
    return (
      <div className="terminal">
      <header className="cmd">
        <img 
          src={cmdimg} 
          alt=""
          className="cmdimg"
        />
        Command Prompt
        <img 
          src={x} 
          alt=""
          className="x"
          onClick={this.toggleTerminal}
        />
      </header>
      <p className="cmdtext">Microsoft Windows [Version 10.0.5555.555] <br /> (c) 2019 Microsoft Corporation. All right reserved.</p>
      <p className="cmdtext">C:\Users\Unknown> <b className="blink_me">_ </b></p>
    </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p >Tyler Cole Portfolio</p>
          <div className="navBar">
            <button className="navBut" onClick={this.toggleTerminal}>About Me</button>
            <button className="navBut">Math</button>
            <button className="navBut">C++</button>
            <button className="navBut">Python/SQL</button>
            <button className="navBut">ReactJS</button>
          </div>
        </header>
        {this.state.terminal ? this.renderTerminal() : null}
      </div>
    );
  }
};

export default App;
