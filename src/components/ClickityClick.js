// Code ClickityClick Component Here
import React, { Component } from 'react';

export default class ClickityClick extends Component {

    constructor() {
        super()
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue'
        }
    }
    handleClick = () => {
        this.setState({hasBeenClicked: !this.state.hasBeenClicked})
        // this.setState((prevState) => {
        //     hasBeenClicked: !prevState.hasBeenClicked
        // })
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <p> I have {!this.state.hasBeenClicked ? 'not' : null } been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
