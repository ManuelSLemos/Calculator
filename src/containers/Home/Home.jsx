import React, { Component } from 'react';

import Calculator from '../../components/Calculator/Calculator';

import './Home.css';

class Home extends Component {

    render(){
        return(
            <div className="app">
                <Calculator />
            </div>
        )
    }
}

export default Home;