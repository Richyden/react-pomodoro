import React from "react";

class ButtonControlReset extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.run !== this.props.run ? true : false;
    }

    render() {
        let materializeCSS = "waves-effect waves-light btn red";
        if (this.props.run) {
            materializeCSS += " disabled";
        }
        return (
            <a className={materializeCSS} onClick={this.props.onClick}>
                <i className={"material-icons left"}>{"replay"}</i>
                {"RESET"}
            </a>
        );
    }
}

export default ButtonControlReset;