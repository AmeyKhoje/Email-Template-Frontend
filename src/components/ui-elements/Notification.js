import { IconButton, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { connect } from "react-redux";
import { handleNotification } from "../store/actions/globalStateActions";

const Notification = props => {
    console.log(props);
    const useStyles = makeStyles({
        close: {
            padding: '5px',
        }
    });

    const classes = useStyles();

    const handleNotificationClose = () => {
        props.onChangeNotification(false);
    }

    return (
        <div className={`notification ${props.global.isNotification && 'show'}`}>
            <div className="notification-body">
                <div className="notification-body_heading">
                    <h5>
                        {props.global.isNotification && props.global.notificationInfo.head}
                    </h5>
                </div>
                <div className="notification-body_message">
                    <p>
                        {props.global.isNotification && props.global.notificationInfo.text}
                    </p>
                </div>
                <div className="notification-body_close">
                    <IconButton className={`${classes.close}`} onClick={handleNotificationClose}>
                        <Close />
                    </IconButton>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeNotification: (value) => dispatch(handleNotification(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);