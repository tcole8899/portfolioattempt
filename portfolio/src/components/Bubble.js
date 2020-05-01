import React from 'react';

class Bubble extends React.Component {

    renderPopUp() {
        return (
            <div>
                
            </div>
        )
    }

    render() {
        return (
            <div className="bubble">
                <header><b>{this.props.title}</b></header>
                <p>
                    {this.props.content}
                </p>
                <div>
                    <button onClick={this.props.popup} className="continue"><b>* * * * *</b></button>
                </div>
            </div>
        );
    }
}

export default Bubble;