import { Container, makeStyles, Paper, Grid, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core"
import Input from "../components/form-elements/Input";
import { colorPalette } from "../components/helpers/Globals";
import Button from '../components/form-elements/Button';
import { useState } from "react";
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";

const Register = props => {
    const [ role, setRole ] = useState('');
    const [ dateOfAdmission, setDateOfAdmission ] = useState(new Date());

    const useStyles = makeStyles({
        loginCard: {
            padding: "20px 18px",
            backgroundColor: colorPalette.accent,
            width: "90%",
            margin: "auto",
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
        },
        selectFormControl: {
            width: "100%"
        },
        textBlack: {
            color: colorPalette.black
        }
    });

    const classes = useStyles();

    return (
        <Container maxWidth="xl" className={`${classes.container}`}>
            <Paper className={`${classes.loginCard}`}>
                <h3 className="form-head text-center mb-20">Register</h3>
                <Grid container justify="center" >
                    <Grid item xs={6}>
                        <div className="input-container">
                            <h5 className="input-container_head">
                                Select your role:
                            </h5>
                            <FormControl className={`${classes.selectFormControl}`}>
                                <InputLabel className={`${classes.textBlack}`}>
                                    Select role
                                </InputLabel>
                                <Select value={role} onChange={(e) => {setRole(e.target.value)}}>
                                    <MenuItem value="Principle">
                                        Principle
                                    </MenuItem>
                                    <MenuItem value="Faculty">
                                        Faculty
                                    </MenuItem>
                                    <MenuItem value="Student">
                                        Student
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                </Grid>
                { role && <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <div className="input-container">
                            <h5 className="input-container_head">
                                First Name:
                            </h5>
                            <Input
                                name="first_name"
                                id="first_name"
                                label="Enter first name"
                                variant="filled"
                                className={`${classes.input}`} />
                        </div>

                        <div className="input-container">
                            <h5 className="input-container_head">
                                Last Name:
                            </h5>
                            <Input
                                name="last_name"
                                id="last_name"
                                label="Enter last name"
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
                                Secondary Contact Number:
                            </h5>
                            <Input
                                name="secondary_contact"
                                id="secondary_contact"
                                label="Enter Secondary Contact"
                                variant="filled"
                                className={`${classes.input}`} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
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

                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                {
                                    role === "Student" &&
                                    <div className="input-container">
                                        <h5 className="input-container_head">
                                            Class:
                                        </h5>
                                        <FormControl className={`${classes.selectFormControl}`}>
                                            <InputLabel className={`${classes.textBlack}`}>
                                                Select Class
                                            </InputLabel>
                                            <Select>
                                                <MenuItem value="MCA">
                                                    MCA 1st Year
                                                </MenuItem>
                                                <MenuItem value="MCA">
                                                    MCA 2st Year
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                }
                            </Grid>
                            <Grid item xs={9}>
                                {
                                    role === "Student" &&
                                    <div className="input-container">
                                        <h5 className="input-container_head">
                                            Year of admission:
                                        </h5>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                variant="inline"
                                                format="dd/MM/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                
                                                value={dateOfAdmission}
                                                className={classes.input}
                                                onChange={(e) => setDateOfAdmission(e)}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }} />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                }
                            </Grid>
                        </Grid>

                        {
                            role === "Faculty" &&
                            <div className="input-container">
                                <h5 className="input-container_head">
                                    Designation:
                                </h5>
                                <FormControl className={`${classes.selectFormControl}`}>
                                    <InputLabel className={`${classes.textBlack}`}>
                                        Select designation
                                    </InputLabel>
                                    <Select>
                                        <MenuItem value="MCA">
                                            Professor
                                        </MenuItem>
                                        <MenuItem value="MCA">
                                            Assistant Professor
                                        </MenuItem>
                                        <MenuItem value="MCA">
                                            Office Admin
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        }

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

                        <div className="input-container">
                            <h5 className="input-container_head">
                                Confirm Password:
                            </h5>
                            <Input
                                name="confirm_password"
                                id="confirm_password"
                                label="Enter confirm password"
                                variant="filled"
                                className={`${classes.input}`} />
                        </div>
                    </Grid>
                </Grid>}
                <Button fullWidth primary>
                    Register
                </Button>
            </Paper>
        </Container>
    )
};

export default Register;