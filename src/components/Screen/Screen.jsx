import React, { Component } from 'react';

import ResultScreen from '../ResultScreen/ResultScreen';
import ComputationScreen from '../ComputationScreen/ComputationScreen';

import './Screen.css';

class Screen extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        const { result, arit } = this.props;
        return(
            <section className="screen">
                <ResultScreen result={result} />
                <ComputationScreen arit={arit} />
            </section>
        )
    }
}

export default Screen;