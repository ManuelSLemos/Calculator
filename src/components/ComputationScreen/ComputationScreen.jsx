import React, { Component } from 'react'

import './ComputationScreen.css';

class ComputationScreen extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section className="computation-screen">
                { this.props.arit }
            </section>
        )
    }
}

export default ComputationScreen;