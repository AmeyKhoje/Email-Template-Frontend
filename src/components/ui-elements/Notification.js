import { IconButton, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useEffect } from "react";
import { connect } from "react-redux";
import { closeNotification, handleNotification } from "../store/actions/globalStateActions";

const Notification = props => {
    console.log(props.global?.notificationInfo);
    const useStyles = makeStyles({
        close: {
            padding: '5px',
        }
    });

    const classes = useStyles();

    const handleNotificationClose = (id) => {
        props.onCloseNotification(id);
    }

    useEffect(() => {
        let intervalNoti = setInterval(() => {
            if(props.global.notificationInfo.length > 0) {
                props.onCloseNotification(props.global.notificationInfo[0]);
            }
        }, 5000);

        clearInterval(intervalNoti)
    }, [])

    return (
        <div className="notification-container">
            {
                props.global?.notificationInfo?.length > 0 &&
                props.global?.notificationInfo.map(notification => {
                    return (
                        <div className={`notification show`}>
                            <div className="notification-body">
                                <div className="notification-body_heading">
                                    <h5>
                                        {notification.head}
                                    </h5>
                                </div>
                                <div className="notification-body_message">
                                    <p>
                                        {notification.text}
                                    </p>
                                </div>
                                <div className="notification-body_close">
                                    <IconButton className={`${classes.close}`} onClick={() => handleNotificationClose(notification.id)}>
                                        <Close />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
};

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeNotification: (value) => dispatch(handleNotification(value)),
        onCloseNotification: (value) => dispatch(closeNotification(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);