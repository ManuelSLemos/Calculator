import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNumberOne, addNumberTwo, addOperator } from '../../store/actions/index';

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
        const { text, addOperator } = this.props;
        // text === + || text === - || text === * ...

        if ( ['+', '-', '*', '/'].includes(text) ){
            console.log(text)
            this.props.addOperator(text)
        }
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

// const mapStateToProps = (state) => { }

const mapDispatchToProps = (dispatch) => {
    return {
        addNumberOne: number => dispatch( addNumberOne(number) ),
        addNumberTwo: number => dispatch( addNumberTwo(number) ),
        addOperator: operator => dispatch( addOperator(operator) )
    }
}

// connect(leer, escribir)(component)
export default connect(null, mapDispatchToProps)(Button);