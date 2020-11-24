import React, { Component } from 'react'
import { connect } from 'react-redux';

import './ComputationScreen.css';

class ComputationScreen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { num1, operator, num2 } = this.props;
        return (
            <section className="computation-screen">
                { `${num1}${operator}${num2}` }
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        num1: state.num1,
        num2: state.num2,
        operator: state.operator
    }
}

export default connect(mapStateToProps)(ComputationScreen);