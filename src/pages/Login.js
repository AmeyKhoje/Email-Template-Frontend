import { Container, Grid, makeStyles, Paper } from "@material-ui/core"
import Input from "../components/form-elements/Input";
import { colorPalette } from "../components/helpers/Globals";
import Button from '../components/form-elements/Button';
import { useHistory } from "react-router";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import { handleLoading, loginUser } from "../components/store/actions";
import { handleEmail } from "../components/store/actions/globalStateActions";
import { axiosClient } from "../components/helpers/helper";

const Login = props => {

    // ? MakeStyles using material-ui
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

    // ? Initialized useForm hook
    const { control, handleSubmit } = useForm();

    // ? Initialized useHistory hook
    const history = useHistory();

    // ? UseStyles exec
    const classes = useStyles();

    const login = async data => {
        // *** Login User ***
        props.onChangeLoading(true);
        const { email, mobile, password } = data;

        // ? Calling axiosClient form API call
        axiosClient({
            url: "/api/users/login",
            headers: {
                "Content-Type": "application/json"
            },
            data: data,
            method: "POST"
        })
        .then(response => {
            // ? Handling Response
            if(response.data.errorOccurred) {
                // ? Some error occurred
                props.onChangeLoading(false);
                alert(response.data.message);
                return;
            }
            if(!response.data.loginSuccess) {
                if(!response.data.userExist) {
                    // ? If user doesn't exist
                    props.onChangeLoading(false);
                    alert(response.data.message);
                    return;
                }
                if(response.data.userExist) {
                    // ? If user already exist
                    props.onChangeLoading(false);
                    alert(response.data.message);
                    return;
                }
            }
            if(response.data.loginSuccess) {
                // ? LOGIN SUCCESS
                // ? Persist user with LocalStorage
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userId", response.data.data.id);
                props.onChangeLoading(false);
                props.onLogin(response.data.data);
                history.push("/");
            }
        })
        .catch(error => {
            // ? API Call Error
        })
    }

    return (
        <Container maxWidth="xl" className={`${classes.container}`}>
            <Paper className={`${classes.loginCard}`}>
                <h3 className="form-head text-center mb-20">Login</h3>
                <div className="input-container">
                    <h5 className="input-container_head">
                        Email Id:
                    </h5>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ 
                            required: { value: true, message: "Please enter email" }, 
                            pattern: { 
                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Enter valid email"
                            }
                        }}
                        defaultValue=""
                        render={({ 
                            field: { onChange, onBlur, name, value }, 
                            fieldState: { error },
                            formState: { errors } }) => (
                            <Input
                                name={name}
                                id={name}
                                label="Enter email"
                                variant="filled"
                                className={`${classes.input}`}
                                onChangeText={onChange}
                                value={value}
                                errorField={error} />
                        )}
                    />
                </div>
                <div className="input-container">
                    <h5 className="input-container_head">
                        Mobile Number:
                    </h5>
                    <Controller
                        name="mobile"
                        control={control}
                        rules={{ required: { value: true, message: "Please enter mobile number" } }}
                        defaultValue=""
                        render={({ 
                            field: { onChange, onBlur, name, value }, 
                            fieldState: { error },
                            formState: { errors } }) => (
                            <Input
                                name={name}
                                id={name}
                                label="Enter mobile number"
                                variant="filled"
                                className={`${classes.input}`}
                                onChangeText={onChange}
                                value={value}
                                errorField={error} />
                        )}
                    />
                </div>
                <div className="input-container">
                    <h5 className="input-container_head">
                        Password:
                    </h5>
                    <Controller
                        name="password"
                        control={control}
                        rules={{ 
                            required: { value: true, message: "Please enter password" },
                            minLength: { value: 8, message: "Password should be minimum 8 characters" },
                            maxLength: { value: 20, message: "Password should no be greater than 20 characters" },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                            }
                        }}
                        defaultValue=""
                        render={({ 
                            field: { onChange, onBlur, name, value }, 
                            fieldState: { error },
                            formState: { errors } }) => (
                            <Input
                                name={name}
                                id={name}
                                type="password"
                                label="Enter password"
                                variant="filled"
                                className={`${classes.input}`}
                                onChangeText={onChange}
                                value={value}
                                errorField={error} />
                        )}
                    />
                </div>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12}>
                        <Button fullWidth primary onClick={handleSubmit(login)}>
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

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeLoading: (value) => dispatch(handleLoading(value)),
        onChangeEmail: (value) => dispatch(handleEmail(value)),
        onLogin: (value) => { console.log(value); dispatch(loginUser(value))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);