import { ButtonBase, Grid, Icon, IconButton, makeStyles, Paper } from "@material-ui/core";
import { Delete, DeleteForever, DeleteOutline, Star, StarBorder } from "@material-ui/icons";

const EmailListCard = props => {
    const useStyles = makeStyles({
        main: {
            backgroundColor: 'transparent',
            marginBottom: '10px',
            borderRadius: '4px',
            backgroundColor: 'rgba(0,0,0,0.07)',
            padding: '10px',
            cursor: "pointer",
            transition: "all 0.3s",
            "&:focus": {
                backgroundColor: "rgba(0,0,0,0.12)"
            },
            "&:hover": {
                backgroundColor: "rgba(0,0,0,0.12)"
            }
        },
        title: {
            fontSize: '16px',
            fontFamily: 'Poppins',
            margin: '0',
            fontWeight: '600'
        },
        starIconButton: {
            padding: '8px',
            zIndex: '9'
        },
        container: {
            
        }
    });

    const classes = useStyles();

    return (
        <Paper className={`${classes.main}`} elevation={0} onClick={props.onEmailClicked}>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs={1}>
                    <IconButton className={`${classes.starIconButton}`} onClick={props.onStarredAction}>
                        { !props.isStarred && <StarBorder fontSize="default" fill="red" fillOpacity={1} color="primary" />}
                        { props.isStarred && <Star fontSize="default" fill="red" fillOpacity={1} color="primary" />}
                    </IconButton>
                </Grid>
                <Grid item xs={10}>
                    <h5 className={`${classes.title}`}>
                        {props.title}
                    </h5>
                </Grid>
                {/* <Grid item xs={1} justify="flex-end">
                    <IconButton className={`${classes.starIconButton}`}>
                        <Delete fontSize="default" />
                    </IconButton>
                </Grid> */}
            </Grid>
        </Paper>
    )
};

export default EmailListCard