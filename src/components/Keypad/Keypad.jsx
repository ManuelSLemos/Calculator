import React, { Component, Children } from 'react';

import KeypadRow from '../KeypadRow/KeypadRow';
import Button from '../Button/Button';

import './Keypad';

class Keypad extends Component {
    constructor(props){
        super(props);

    }



    render() {
        return (
            <section className="keypad">
                <KeypadRow>
                    <Button text="C" />
                    <Button text="&larr;" />
                    <Button text="%" />
                    <Button text="/" />
                </KeypadRow>
                <KeypadRow>
                    <Button text="9" onPress={this.props.onPress} />
                    <Button text="8" onPress={this.props.onPress} />
                    <Button text="7" onPress={this.props.onPress} />
                    <Button text="*" />
                </KeypadRow>
                <KeypadRow>
                    <Button text="6" onPress={this.props.onPress} />
                    <Button text="5" onPress={this.props.onPress} />
                    <Button text="4" onPress={this.props.onPress} />
                    <Button text="-" />
                </KeypadRow>
                <KeypadRow>
                    <Button text="3" onPress={this.props.onPress} />
                    <Button text="2" onPress={this.props.onPress} />
                    <Button text="1" onPress={this.props.onPress} />
                    <Button text="+" />
                </KeypadRow>
                <KeypadRow>
                    <Button text="0" />
                    <Button text="." />
                    <Button type="large" text="=" />
                </KeypadRow>
            </section>
        )
    }
}

export default Keypad;