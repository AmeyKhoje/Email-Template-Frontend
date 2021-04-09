import { Container, Grid, makeStyles, Paper } from "@material-ui/core"
import Input from "../components/form-elements/Input";
import { colorPalette } from "../components/helpers/Globals";
import Button from '../components/form-elements/Button';
import { useHistory } from "react-router";

const Login = props => {
    const useStyles = makeStyles({
        loginCard: {
            padding: "20px 18px",
            backgroundColor: colorPalette.accent,
            width: "30%",
            margin: "auto",
            // marginTop: "100px",
            boxShadow: "0px 1px 4px 0px rgba(0,0,0,0.3)"
        },
        container: {
            width: "100%",
            height: "100%",
            paddingTop: "70px",
            paddingBottom: "70px"
        },
        input: {
            width: "100%"
        }
    });

    const history = useHistory();

    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={`${classes.container}`}>
            <Paper className={`${classes.loginCard}`}>
                <h3 className="form-head text-center mb-20">Login</h3>
                <div className="input-container">
                    <h5 className="input-container_head">
                        Email Id:
                    </h5>
                    <Input
                        name="email"
                        id="email"
                        label="Enter email"
                        variant="filled"
                        className={`${classes.input}`} />
                </div>
                <div className="input-container">
                    <h5 className="input-container_head">
                        Mobile Number:
                    </h5>
                    <Input
                        name="mobile"
                        id="mobile"
                        label="Enter mobile"
                        variant="filled"
                        className={`${classes.input}`} />
                </div>
                <div className="input-container">
                    <h5 className="input-container_head">
                        Password:
                    </h5>
                    <Input
                        name="password"
                        id="password"
                        label="Enter password"
                        variant="filled"
                        className={`${classes.input}`} />
                </div>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12}>
                        <Button fullWidth primary>
                            Login
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} style={{ textAlign: "center"}}>
                        <span className="text-center">Not registered yet?</span>
                        <Button fullWidth accent onClick={() => history.push("/register")}>
                            Go to Register
                        </Button>
                    </Grid>
                </Grid>
                
            </Paper>
        </Container>
    );
};

export default Login;