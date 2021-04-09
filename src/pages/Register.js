import { Container, makeStyles, Paper, Grid, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core"
import Input from "../components/form-elements/Input";
import { colorPalette } from "../components/helpers/Globals";
import Button from '../components/form-elements/Button';
import { useState } from "react";
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import 'date-fns';
import DateFnsUtils from "@date-io/date-fns";
import { useForm, Controller } from "react-hook-form";
import { getAllByDisplayValue } from "@testing-library/dom";

const Register = props => {
    const [ role, setRole ] = useState('');
    const [ dateOfAdmission, setDateOfAdmission ] = useState(new Date());
    const [ designation, setDesignation ] = useState('')

    const { control, handleSubmit } = useForm();

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
                            <Controller
                                name="first_name"
                                control={control}
                                rules={{ required: { value: true, message: "Please enter first name" } }}
                                defaultValue=""
                                render={({ 
                                    field: { onChange, onBlur, name, value }, 
                                    fieldState: { error },
                                    formState: { errors } }) => (
                                    <Input
                                        name={name}
                                        id={name}
                                        label="Enter first name"
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
                                Last Name:
                            </h5>
                            <Controller
                                name="last_name"
                                control={control}
                                rules={{ required: { value: true, message: "Please enter last name" } }}
                                defaultValue=""
                                render={({ 
                                    field: { onChange, onBlur, name, value }, 
                                    fieldState: { error },
                                    formState: { errors } }) => (
                                    <Input
                                        name={name}
                                        id={name}
                                        label="Enter last name"
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
                                Secondary Contact Number:
                            </h5>
                            <Controller
                                name="secondary_contact"
                                control={control}
                                rules={{ required: { value: true, message: "Please enter secondarycontact" } }}
                                defaultValue=""
                                render={({ 
                                    field: { onChange, onBlur, name, value }, 
                                    fieldState: { error },
                                    formState: { errors } }) => (
                                    <Input
                                        name={name}
                                        id={name}
                                        label="Enter secondary contact"
                                        variant="filled"
                                        className={`${classes.input}`}
                                        onChangeText={onChange}
                                        value={value}
                                        errorField={error} />
                                )}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
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

                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                {
                                    role === "Student" &&
                                    <div className="input-container">
                                        <h5 className="input-container_head">
                                            Class:
                                        </h5>
                                        <Controller
                                            name="class"
                                            control={control}
                                            rules={{ required: { value: true, message: "Please enter class" } }}
                                            defaultValue=""
                                            render={({ 
                                                field: { onChange, onBlur, name, value }, 
                                                fieldState: { error },
                                                formState: { errors } }) => (
                                                    <FormControl className={`${classes.selectFormControl}`}>
                                                        <InputLabel className={`${classes.textBlack}`}>
                                                            Select Class
                                                        </InputLabel>
                                                        <Select 
                                                            name={name}
                                                            value={value}
                                                            onChange={onChange}>
                                                            <MenuItem value="MCA 1st Year">
                                                                MCA 1st Year
                                                            </MenuItem>
                                                            <MenuItem value="MCA 2nd Year">
                                                                MCA 2nd Year
                                                            </MenuItem>
                                                        </Select>
                                                        <span style={{ fontSize: "10px", color: "red" }}>
                                                            { error && error?.message }
                                                        </span>
                                                    </FormControl>
                                            )}
                                        />
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
                                        <Controller
                                            name="year_of_adm"
                                            control={control}
                                            rules={{ required: { value: true, message: "Please enter year of admission" } }}
                                            defaultValue=""
                                            render={({ 
                                                field: { onChange, onBlur, name, value }, 
                                                fieldState: { error },
                                                formState: { errors } }) => (
                                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                        <KeyboardDatePicker
                                                            variant="inline"
                                                            format="dd/MM/yyyy"
                                                            margin="normal"
                                                            id="date-picker-inline"
                                                            name={name}
                                                            value={dateOfAdmission}
                                                            className={classes.input}
                                                            onChange={onChange}
                                                            KeyboardButtonProps={{
                                                                'aria-label': 'change date',
                                                            }} />
                                                            <span style={{ fontSize: "10px", color: "red" }}>
                                                                { error && error?.message }
                                                            </span>
                                                    </MuiPickersUtilsProvider>
                                            )}
                                        />
                                        
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
                                    <Select value={designation} onChange={(e) => {
                                        setDesignation(e.target.value)
                                    }}>
                                        <MenuItem value="Professor">
                                            Professor
                                        </MenuItem>
                                        <MenuItem value="Assistant Professor">
                                            Assistant Professor
                                        </MenuItem>
                                        <MenuItem value="Office Admin">
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
                                        label="Enter password"
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
                                Confirm Password:
                            </h5>
                            <Controller
                                name="confirm_password"
                                control={control}
                                rules={{ required: { value: true, message: "Please enter confirm password" } }}
                                defaultValue=""
                                render={({ 
                                    field: { onChange, onBlur, name, value }, 
                                    fieldState: { error },
                                    formState: { errors } }) => (
                                    <Input
                                        name={name}
                                        id={name}
                                        label="Enter confirm password"
                                        variant="filled"
                                        className={`${classes.input}`}
                                        onChangeText={onChange}
                                        value={value}
                                        errorField={error} />
                                )}
                            />
                        </div>
                    </Grid>
                </Grid>}
                <Button fullWidth primary onClick={handleSubmit((data) => { console.log(data) })}>
                    Register
                </Button>
            </Paper>
        </Container>
    )
};

export default Register;