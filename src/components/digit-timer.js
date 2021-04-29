import React from 'react';

class DigitTimer extends React.Component {
    render() {
        let secondes = Math.trunc(this.props.timer % 60);
        if(secondes < 10) {
            secondes = `0${secondes}`;
        }

        let minutes = Math.trunc(this.props.timer / 60);
        if(minutes < 10) {
            minutes = `0${minutes}`;
        }

        return (
            <div>
                <h1>
                    {minutes}
                    {":"}
                    {secondes}
                </h1>
            </div>
        );
    }
}

export default DigitTimer;