import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import { EditSharp } from "@material-ui/icons";
import { connect } from "react-redux";
import { colorPalette } from "../components/helpers/Globals";
import { handleEmail, handleLoading } from "../components/store/actions/globalStateActions";

const Dashboard = props => {

    // ? MakeStyles using material-ui
    const useStyles = makeStyles({
        iconContainer: {
            backgroundColor: colorPalette.primary,
            padding: "15px",
            position: "fixed",
            bottom: "50px",
            right: "50px",
            '&:hover': {
                backgroundColor: colorPalette.primary
            }
        },
        icon: {
            color: colorPalette.white,
            "&:hover": {
                color: colorPalette.white
            }
        }
    });

    // ? UseStyles exec
    const classes = useStyles();

    return (
        <div>
            <div>
                <h1>
                    Welcome to Email Portal
                </h1>
            </div>
            <Tooltip title="Compose" arrow>
                <IconButton 
                    aria-label="edit" 
                    className={`${classes.iconContainer}`}
                    onClick={() => {
                        props.onChangeEmail(true)
                    }}>
                    <EditSharp className={`${classes.icon}`} />
                </IconButton>
            </Tooltip>
        </div>
    );
};

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeLoading: (value) => dispatch(handleLoading(value)),
        onChangeEmail: (value) => dispatch(handleEmail(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);