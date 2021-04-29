import React from "react";

class ButtonPlusSecond extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.run !== this.props.run ? true : false;
    }

    render() {
        let materializeCSS = "btn waves-effect waves-light black white-text";
        if (this.props.run) {
            materializeCSS += " disabled";
        }
        return (
            <a className={materializeCSS} onClick={this.props.onClick}>
                {"*10 SEC."}
            </a>
        );
    }
}

export default ButtonPlusSecond;