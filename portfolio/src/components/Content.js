import React from 'react';
import Bubble from './Bubble.js';
import data from './Content.json';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonVal: this.props.buttonVal,
            education: data.Education,
            projects: data.Projects,
            experience: data.Experience
        };
        this.chooseContent = this.chooseContent.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.buttonVal !== this.props.buttonVal) {
            this.setState({
                buttonVal: nextProps.buttonVal
            })
        }
    }

    //method to handle which subject
    chooseContent() {
        var button = this.state.buttonVal;
        console.log(button);
        var printData = button === "Education" ? this.state.education :
            (button === "Projects" ? this.state.projects :
                this.state.experience);

        console.log(printData);

        var display = [[]];
        var j = 0;
        
        for (var i = 1; i < printData.length + 1; i++) {


            display[j].push(
                <td>
                    <Bubble
                        title={printData[i-1].title}
                        content={printData[i-1].description}
                    />
                </td>
            );
            if(i % 3 === 0){
                j++;
                display.push([]);
            }
        }

        var displayFull = [];
        for(var k = 0; k < display.length; k++){
            displayFull.push(
                <tr>
                    {display[k]}
                </tr>
            )
        }

        console.log(display);
        return (
            <table className="organizer">
                {displayFull}
            </table>
        );
    }

    //method to handle multiple pages

    //method to render page buttons (small circles)

    render() {
        return (
            <div className="tablediv">
                {this.chooseContent()}
            </div>
        );
    }
}

export default Content;