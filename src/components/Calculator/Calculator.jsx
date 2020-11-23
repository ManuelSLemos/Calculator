import React, { Component, Fragment } from 'react';

import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

import './Calculator.css';

class Calculator extends Component {
    
    render(){
        return(
            <Fragment>
                <main className="calculator"> 
                    <Screen />
                    <Keypad />
                </main>
            </Fragment>
        )
    }
}

export default Calculator;