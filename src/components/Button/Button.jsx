import React, { Component } from 'react';

import './Button.css'

class Button extends Component {
    constructor(props){
        super(props);

        this.state = {
            classes: 'btn'
        }
    }

    componentDidMount(){
        if (this.props.type === 'large'){
            this.setState({classes: 'btn btn--large'})
        }
    }

    KeyDown = () => {
        const { text } = this.props;

        console.log(text);
        this.props.onPress(text);
    }

    render() {
        return (
            <button 
                className={this.state.classes} 
                onClick={() => this.KeyDown()}
            >
                { this.props.text }
            </button>
        )
    }
}

export default Button;