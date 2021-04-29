import React from 'react';

class ButtonMinusMinute extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.run !== this.props.run ? true : false;
    }

    render() {
        let materializeCSS = "btn waves-effect waves-light black white-text";
        if (this.props.run) {
            materializeCSS += " disabled";
        }

        return(
            <button className={materializeCSS} type={"submit"} name={"action"} value={"minute"} onClick={this.props.onClick}>
            {"-1 MIN."}
            </button>
        );
    }
}

export default ButtonMinusMinute;