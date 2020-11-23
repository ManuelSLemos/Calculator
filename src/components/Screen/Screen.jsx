import React, { Component } from 'react';

import ResultScreen from '../ResultScreen/ResultScreen';
import ComputationScreen from '../ComputationScreen/ComputationScreen';

import './Screen.css';

class Screen extends Component{
    render(){
        return(
            <section className="screen">
                <ResultScreen />
                <ComputationScreen />
            </section>
        )
    }
}

export default Screen;