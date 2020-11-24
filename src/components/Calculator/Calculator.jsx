import React, { Component, Fragment } from 'react';

import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

import './Calculator.css';

class Calculator extends Component {
    constructor(props){
        super(props);

        this.state = {
            result: '',
            num1: '',
            operator: '',
            num2: ''
        }
    }

    OnPress = (value) => {
        console.log(value)
        this.setState(prevState => ({ num1: prevState.num1 + value }))
    }
    
    render(){
        const { result, num1, num2, operator } = this.state;
        return(
            <Fragment>
                <main className="calculator"> 
                    <Screen 
                        result={result} 
                        arit={`${num1}${operator}${num2}`} />
                    <Keypad onPress={this.OnPress} />
                </main>
            </Fragment>
        )
    }
}

export default Calculator;