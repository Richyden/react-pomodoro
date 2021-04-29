import React from 'react';
import DigitTimer from './src/components/digit-timer';
import ButtonControlStart from './src/components/button-control-start';
import ButtonControlStop from './src/components/button-control-stop';
import ButtonControlReset from './src/components/button-control-reset';
import ButtonMinusMinute from './src/components/button-minus-minute';
import ButtonPlusMinute from './src/components/button-plus-minute';
import ButtonMinusSecond from './src/components/button-minus-seconde';
import ButtonPlusSecond from './src/components/button-plus-seconde';
import Modal from './src/components/modal';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            run: false,
            timer: 0,
            lastTime: 0,
            timerID: 0,
        };

        this.cooldown = this.cooldown.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleZero = this.handleZero.bind(this);
    }

    cooldown() {
        if(this.state.timer > 0) {
            this.setState(state =>({
                timer: state.timer -1,
            }));
        }else {
            this.handlePause();
            this.handleReset();
            const elem = document.querySelector("#modal");
            const instance = M.Modal.getInstance(elem);
            instance.open();
        }
    }

    handleStart() {
        const yata = setInterval(() => {
            this.cooldown();
        }, 1000);
        this.setState(state => ({
            lastTime: state.timer,
            run: true,
            timerID: yata,
        }));
    }

    handlePause() {
        clearInterval(this.state.timerID);
        this.setState({
            run: false,
        });
    }

    handleIncrement(isMinute) {
        if (isMinute.target.value) {
            this.setState(state => ({
                timer: state.timer + 60,
            }));
        } else {
            this.setState(state => ({
                timer: state.timer + 10,
            }));
        }
    }

    handleDecrement(isMinute) {
        if (isMinute.target.value) {
            if (this.state.timer > 59) {
                this.setState(state => ({
                    timer: state.timer - 60,
                }));
            } else {
                this.handleZero();
            }
        } else if (this.state.timer > 10) {
            this.setState(state => ({
                timer: state.timer - 10,
            }));
        } else {
            this.handleZero();
        }
    }

    handleReset() {
        this.setState(state => ({
            timer: state.lastTime,
        }));
    }

    handleZero() {
        this.setState({
            timer: 0,
        });
    }

    render() {
        return (
            <div>
                <DigitTimer timer={this.state.timer} />
                <div>
                    <ButtonControlStart
                        run={this.state.run}
                        onClick={this.handleStart}
                    />
                    <ButtonControlStop
                        run={this.state.run}
                        onClick={this.handlePause}
                    />
                    <ButtonControlReset
                        run={this.state.run}
                        onClick={this.handleReset}
                    />
                </div>
                <div>
                    <ButtonPlusMinute
                        run={this.state.run}
                        onClick={this.handleIncrement}
                    />
                    <ButtonPlusSecond
                        run={this.state.run}
                        onClick={this.handleIncrement}
                    />
                </div>
                <div>
                    <ButtonMinusMinute
                        run={this.state.run}
                        onClick={this.handleDecrement}
                    />
                    <ButtonMinusSecond
                        run={this.state.run}
                        onClick={this.handleDecrement}
                    />
                </div>
                <Modal
                    onClickYes={this.handleStart}
                    onClickNo={this.handleZero}
                />
            </div>
        );
    }
}

export default App;