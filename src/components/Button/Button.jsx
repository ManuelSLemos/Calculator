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

    render() {
        return (
            <button className={this.state.classes}>
                { this.props.text }
            </button>
        )
    }
}

export default Button;