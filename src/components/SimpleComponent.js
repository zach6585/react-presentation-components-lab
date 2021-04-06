// Code SimpleComponent Here
import React from "react";

export default class SimpleComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        let prevState = this.state.mood
        if (prevState == 'happy') {
            this.setState ({mood: 'sad'})
        }
        else {
            this.setState({mood: 'happy'})
        }
    }

    render() {
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}