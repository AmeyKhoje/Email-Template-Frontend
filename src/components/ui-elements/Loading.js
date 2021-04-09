import { CircularProgress, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Fragment } from "react";
import { connect } from "react-redux";
import { colorPalette } from "../helpers/Globals";
import { handleLoading } from "../store/actions";

const Loading = props => {
    const useStyles = makeStyles({
        main: {
            padding: "10px 10px",
            backgroundColor: colorPalette.white,
            borderRadius: "10",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "99",
            width: "150px"
        },
        text: {
            margin: "0",
            fontSize: "16px",
            fontWeight: "600",
            textAlign: "center"
        },
        overlay: {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)"
        }
    });

    const classes = useStyles();

    return (
        <Fragment>
            <Paper className={`${classes.main}`}>
                <Container>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={3}>
                            <CircularProgress size={25} thickness={6} />
                        </Grid>
                        <Grid item xs={9}>
                            <p className={`${classes.text}`}>
                                Loading
                            </p>
                        </Grid>
                    </Grid>
                </Container>
                
            </Paper>
            <div className={`${classes.overlay}`}></div>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeLoading: (value) => dispatch(handleLoading(value))
    }
};

export default connect( mapStateToProps, mapDispatchToProps )(Loading);