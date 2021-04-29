import React from 'react';

class ButtonControlStop extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.run !== this.props.run ? true : false;
    }

    render() {
        let materializeCSS = "waves-effect waves-light btn";
        if(!this.props.run) {
            materializeCSS += " disabled";
        }

        return(
            <a className={materializeCSS} onClick={this.props.onClick}>
                <i className={"material-icons left"}>{"pause"}</i>
                {"PAUSE"}
            </a>
        );
    }
}

export default ButtonControlStop;