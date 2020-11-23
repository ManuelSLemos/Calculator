import React, { Component } from 'react'

import './KeypadRow.css'

class KeypadRow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="keypad_row">
                { this.props.children }
            </div>  
        )
    }
}

export default KeypadRow