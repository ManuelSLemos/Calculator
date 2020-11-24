import React, { Component } from 'react';

import './ResultScreen.css';

class ResultScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="result-screen">
                {this.props.result}
            </div>
        )
    }
}

export default ResultScreen;