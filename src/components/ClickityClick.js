// Code ClickityClick Component Here

import React from 'react';
// what is this importing, the react class, react library
// gives us the predefined functionality options in the react library 

// when we say class what are we talking about and what is it extending? the functions that will feed the props back to the parent class?
class ClickityClick extends React.Component {
    // the constuctor is like def initialize? it does things on the creation of the clickityClick class?
    constructor() {
        // what is super doing? calling the constructor of the parent class? also is it actually taking in the react import library?
        super();
// defining the initial state:
        this.state={
            hasBeenClicked: false
        };

    }
    // accepts and stores the new state
    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        })
    };
// what is actually being rendered in the UI, is exported to the index.js DOM?
    render() {
        return (
        <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p>
            <button onClick={this.handleClick}>Click me!</button>
        </div>
        );
    }
}

// if a parent knows about its children why do we have to import and export the data?
export default ClickityClick;