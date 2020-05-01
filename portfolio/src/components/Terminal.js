import React from 'react';
import cmdimg from './pictures/cmdimg.png';
import x from './pictures/x.png';

class Terminal extends React.Component {
    constructor(props) {
        super(props);
        this.Input = React.createRef();
        this.state = {
            buttonVal: this.props.buttonVal,
            loading: true,
            aboutMe: false
        };
        this.keyPressed = this.keyPressed.bind(this)
        this.toggleContent = this.toggleContent.bind(this)
        this.timer = setTimeout(this.toggleContent, 1500);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.buttonVal !== this.props.buttonVal) {
            this.setState({
                buttonVal: nextProps.buttonVal,
                aboutMe: false,
                contact: false,
                loading: true
            });
        }
        this.Input.current.focus();
        this.timer = setTimeout(this.toggleContent, 1500);
    }

    keyPressed(event) {
        if (event.key === "Enter" && this.state.buttonVal === "aboutMe") {
            console.log("working")
            this.setState({
                loading: true
            })
        }

    }

    toggleContent() {
        this.setState({
            loading: false
        })
        if (this.state.buttonVal === "aboutMe") {
            this.setState({
                aboutMe: true,
            })
        }
        if (this.state.buttonVal === "Contact") {
            this.setState({
                contact: true,
            })
        }
    }

    renderAboutMe() {
        return (
            <p className="cmdtext">
                <u><b>EDUCATION:</b></u><br />
            I am currently in my junior year studying Computer Science at the University of Rhode Island.
                <br /> Some of the classes I have taken during my time at URI have been:
                <ul>
                    <li>Data Structures & Algorithms - Using C++, About various sorting aglorithms and what makes
                    a good sorting algoritm. Another key part of the class was Data structures like stacks,
                    heaps, queues, hashtables, and trees.</li>
                    <li>Software Engineering - focused on one large group
                    project which my group decided to complete using the ReactJS framework. The purpose of
                    our groups app was to find airline tickets from multiple airlines. The project will be
                    available to use under the 'ReactJS' tab.</li>
                    <li>Programming for Data Science - Using Python, focused on vizualization and analyzation of
                    <br />data as well as introducing machine learning concepts.</li>
                </ul>
            I am also Minoring in Cyber Security which is another one of my interests. My coursework in my
            Minor has gone over a majority of the CompTIA A+ Certification as well as a whole class on
            Information Assurance. These classes mostly covered policy and good practices as well as
            setting up and working with virtual machines.<br />
                <br />
                <u><b>WORK EXPERIENCE:</b></u><br />
            I am currently employeed as a Men's Gymnastics Coach at Aim High Academy and an Intern at SquadLocker.
                <ul>
                    <li>SquadLocker - responsibilities are to create and visualize reports from different<br />
                    departments of the buisness.</li>
                    <ul>
                        <li>To do this I have to create a query for their database using SQL then use a platform called
                        Periscope to visualize it.</li>
                    </ul>
                    <li>SquadLocker - I also help their software engineering team with diagnosing and fixing bugs<br />
                    in their web application</li>
                    <li>Aim High - coach children (ages 4-18) in recreational and competetive gymnastics lessons</li>
                </ul>
            </p>
        )
    }

    renderContact() {
        return(
            <p className="cmdtext">
                <u><b>Tyler Cole</b></u>
                <p><b>Email: </b> <a className="cmdtext" href="mailto:tylercole8899@gmail.com"> tylercole8899@gmail.com</a></p>
                <p><b>Github: </b> <a className="cmdtext" href="https://github.com/tcole8899"> https://github.com/tcole8899</a></p>
                <p><b>LinkedIn: </b> <a className="cmdtext" href="https://www.linkedin.com/in/tyler-cole-408364161"> https://www.linkedin.com/in/tyler-cole-408364161</a></p>
            </p>
        )
    }

    renderTerminal() {
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
                        onClick={this.props.toggleTerminalOff}
                    />
                </header>
                <p className="cmdtext">Microsoft Windows [Version 10.0.5555.555] <br /> (c) 2019 Microsoft Corporation. All right reserved.</p>
                <p className="cmdtext">
                    C:\Users\Tyler\{this.state.buttonVal}> <b className="blink_me">_ </b>
                    {
                        this.state.loading ?
                            <i data-content="  . . . . . . . . . . . . . . . . . . . ." className="load">
                                . . . . . . . . . . . . . . . . . . . .</i> : null
                    }
                    {this.state.aboutMe ? this.renderAboutMe() : null}
                    {this.state.contact ? this.renderContact() : null}
                </p>
                <input
                    id="input"
                    className="enter"
                    onKeyPress={this.keyPressed}
                    autoFocus={true}
                    ref={this.Input} >
                </input>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderTerminal()}
            </div>
        );
    }

}

export default Terminal;