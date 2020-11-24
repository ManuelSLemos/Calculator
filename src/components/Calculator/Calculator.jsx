import React, { Component, Fragment } from 'react';

import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

import './Calculator.css';

class Calculator extends Component {
    constructor(props){
        super(props);

        this.initialState = {
            result: '0',
            num1: '0',
            operator: '',
            num2: ''
        }

        this.state = this.initialState;
    }

    OnPressNumber = (value) => {
        const { num1, operator } = this.state;

        if ( num1 !== '' && operator !== '' )
        {
            this.setState(prevState => ({ num2: prevState.num2 + value }))
        }
        else
        {
            this.setState(prevState => ({ num1: prevState.num1 + value }))
        }
        
    }

    OnPressOperator = (value) => {
        const { num1, operator, num2 } = this.state;
        this.setState({ operator: value })
    }

    OnPressOperatorSpecial = (value) => {
        let { num1, operator, num2 } = this.state;
        num1 = Number(num1);
        num2 = Number(num2);

        if(value === '='){
            let result = 0

            if( operator === '+' ){
                result = num1 + num2;
            }
            else if (operator === '-' ) {
                result = num1 - num2;
            }
            else if ( operator === '*' ) {
                result = num1 * num2;
            }
            else if ( operator === '/') {
                result = num1 / num2;
            }

            this.setState({
                result: result,
                num1: result,
                operator: '',
                num2: ''
            })
        }

        if(value === 'C'){
            this.setState(this.initialState)
        }
    }

    
    render(){
        const { result, num1, num2, operator } = this.state;
        return(
            <Fragment>
                <main className="calculator"> 
                    <Screen 
                        result={result} 
                        arit={`${num1}${operator}${num2}`} />
                    <Keypad 
                        onPressNumber={this.OnPressNumber} 
                        onPressOperator={this.OnPressOperator}
                        onPressOperatorSpecial={this.OnPressOperatorSpecial}
                    />
                </main>
            </Fragment>
        )
    }
}

export default Calculator;