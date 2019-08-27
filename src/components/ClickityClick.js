// Code ClickityClick Component Here
import React, {Component} from 'react'

class ClickityClick extends Component {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue',
        };
    }

// Arrow function automatically binds to the enclosing scope. Therefore do not need to explicitly bind in the constructor
    handleClick = () => {
        this.setState({
            hasBeenClicked: true,
        }, () => console.log(this.state.hasBeenClicked))
    }
        
    render() { 
        return ( 
            <div>
                <p> I have {this.state.hasBeenClicked ? null : 'not'} been clicked! </p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
         );
    }
}
 
export default ClickityClick;