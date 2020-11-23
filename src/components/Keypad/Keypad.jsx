import React, { Component, Children } from 'react';

import KeypadRow from '../KeypadRow/KeypadRow';
import Button from '../Button/Button';

import './Keypad';

class Keypad extends Component{
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
                    <Button text="9" />
                    <Button text="8" />
                    <Button text="7" />
                    <Button text="*" />
                </KeypadRow>
                <KeypadRow>
                    <Button text="6" />
                    <Button text="5" />
                    <Button text="4" />
                    <Button text="-" />
                </KeypadRow>
                <KeypadRow>
                    <Button text="3" />
                    <Button text="2 " />
                    <Button text="1" />
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