import React from 'react';
import github from './pictures/GitHub-logo.svg';
import linked from './pictures/linkedin.png';
import gmail from './pictures/Gmail-Logo.png';

class Heading extends React.Component {

    render() {
        const clickT = this.props.toggleTerminal;
        const click = this.props.toggleContent;
        return (
            <header className="App-header">
                <p >Tyler Cole Portfolio</p>
                <div className="contactBar">
                    <a href="https://www.github.com/tcole8899"><img src={github} alt="" className="contactImg" /></a>
                    <a href="https://www.linkedin.com/in/tyler-cole-408364161"><img src={linked} alt="" className="contactImg" /></a>
                    <a href="mailto:tylercole8899@gmail.com"><img src={gmail} alt="" className="contactImg" /></a>
                </div>
                <div className="navBar">
                    <button className="navBut" value="aboutMe" onClick={clickT}>About Me</button>
                    <button className="navBut" value="Education" onClick={click}>Education</button>
                    <button className="navBut" value="Projects" onClick={click}>Projects</button>
                    <button className="navBut" value="Experience" onClick={click}>Experience</button>
                    <button className="navBut" value="Contact" onClick={clickT}>Contact</button>
                </div>
            </header>
        );
    }
}

export default Heading;