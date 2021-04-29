import React from "react";

class Modal extends React.Component {
    static shouldComponentUpdate() {
        return false;
    }

    render() {
        return(
            <div id={"modal"} className={"modal"}>
                <div className={"modal-content"}>
                    <h4>{"Time's Up!"}</h4>
                    <p>{"It's BREAK TIME <3"}</p>
                    <p>
                        {"Do you want to start this amazing pomodoro again with the same duration?"}
                    </p>
                </div>

                <div className={"row"}>
                    <div className={"col s4 offset-s2"}>
                        <a
                            className={
                                "modal-close waves-effect waves-green btn-flat green"
                            }
                            onClick={this.props.onClickYes}>
                            <i className={"material-icons left"}>
                                {"alarm_on"}
                            </i>
                            {"Yes! Let's Go"}
                        </a>
                    </div>
                    <div className={"col s4"}>
                        <a
                            className={
                                "modal-close waves-effect waves-green btn-flat red"
                            }
                            onClick={this.props.onClickNo}>
                            <i className={"material-icons left"}>
                                {"alarm_off"}
                            </i>
                            {`No
                        thanks`}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;