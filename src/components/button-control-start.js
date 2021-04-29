import React from 'react';

class ButtonControlStart extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.run !== this.props.run ? true : false;
    }

    render() {
        let materializeCSS = "waves-effect waves-light btn green";
        if(this.props.run) {
            materializeCSS += " disabled";
        }

        return(
            <a className={materializeCSS} onClick={this.props.onClick}>
                <i className={"material-icons left"}>{"play_arrow"}</i>
                {"START"}
            </a>
        );
    }
}

export default ButtonControlStart;