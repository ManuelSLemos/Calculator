import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ResultScreen.css';

class ResultScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="result-screen">
                { this.props.result }
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return { result: state.result }
}

export default connect(mapStateToProps)(ResultScreen);