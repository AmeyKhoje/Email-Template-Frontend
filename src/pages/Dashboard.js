import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import { EditSharp } from "@material-ui/icons";
import { colorPalette } from "../components/helpers/Globals";

const Dashboard = props => {
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

    const classes = useStyles();

    return (
        <div>
            <div>
                <h1>
                    Welcome to Email Portal
                </h1>
            </div>
            <Tooltip title="Compose" arrow>
                <IconButton aria-label="edit" className={`${classes.iconContainer}`}>
                    <EditSharp className={`${classes.icon}`} />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default Dashboard;