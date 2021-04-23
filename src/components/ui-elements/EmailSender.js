import { Chip, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import Button from "../form-elements/Button";
import Input from "../form-elements/Input";
import { colorPalette } from "../helpers/Globals";
import { axiosClient } from "../helpers/helper";
import { handleLoading } from "../store/actions";
import { handleEmail } from "../store/actions/globalStateActions";

const EmailSender = props => {
    const [ emails, setEmails ] = useState([]);

    // ? Initialize useForm
    const { control, handleSubmit } = useForm();

    const useStyles = makeStyles({
        main: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "40%",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 3px 14px 0px rgba(0,0,0,0.2)",
            zIndex: "999",
            transition: "all 0.5s",
        },
        header: {
            padding: "10px 15px",
            backgroundColor: colorPalette.primary,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px"
        },
        headText: {
            fontSize: "14px",
            color: colorPalette.white,
            margin: "0",
            fontWeight: "500"
        },
        body: {
            padding: "10px 15px"
        },
        input: {
            width: "100%"
        },
        chip: {
            backgroundColor: "rgba(45, 79, 111, 0.2)",
            fontSize: "10px",
            fontFamily: "Poppins",
            fontWeight: "500",
            border: "1px solid"+colorPalette.primary,
            marginRight: "5px",
            marginBottom: '5px'
        }
    });

    const classes = useStyles();

    // ? Handle email text change
    const onEmailTextChange = e => {

        // ? Email Regex
        let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(e.key === "Enter") {
            // ? Handling Enter Key Press
            if(emails.length > 0) {
                // ? Check if user already entered email
                if(emails.includes(e.target.value)) {
                    alert("Email already entered")
                    e.target.value="";
                    return;
                }
                else {
                    // ? Check if email is valid and add to emails state array
                    let isValidEmail = emailRegex.test(e.target.value)
                    if(isValidEmail) {
                        setEmails([...emails, e.target.value])
                        e.target.value="";
                        return;
                    }
                    else {
                        alert("Enter valid email")
                        return;
                    }
                }
            }
            else {
                // ? Check if email is valid and add to emails state array
                let isValidEmail = emailRegex.test(e.target.value)
                if(isValidEmail) {
                    setEmails([...emails, e.target.value])
                    e.target.value="";
                    return;
                }
                else {
                    alert("Enter valid email")
                    return;
                }
            }
        }
    }

    const sendEmails = async data => {
        // ? Send Email
        props.onChangeLoading(true);

        // ? API call to send email
        await axiosClient({
            url: "/api/emails/send",
            data: {
                recipients: emails,
                title: data.title,
                message: data.message
            },
            headers: {
                "Authorization": "Bearer "+props.user.token,
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        .then(resp => {
            props.onChangeLoading(false);
            props.onChangeEmail(false)
            if(resp.data.isError) {
                alert(resp.data.message);
                return;
            }
            if(!resp.data.isError) {
                alert(resp.data.message);
                return;
            }
        })
        .catch(error => {
            // ? Server Error or Network Error
            props.onChangeEmail(false)
            props.onChangeLoading(false);
        })
        props.onChangeEmail(false)
        props.onChangeLoading(false);
    }

    return (
        <Paper className={`${classes.main}`}>
            <div className={`${classes.header}`}>
                <h5 className={`${classes.headText}`}>
                    Send Email
                </h5>
            </div>
            <div className={`${classes.body}`}>
                <div className="input-container">
                    <h5 className="input-container_head">
                        To:
                    </h5>
                        <Input
                            name="emails"
                            small
                            id="emails"
                            label="Title of email"
                            variant=""
                            placeholder="Enter receivers"
                            className={`${classes.input}`}
                            onKeyPress={(e) => onEmailTextChange(e)}
                        />
                </div>
                { emails.length > 0 &&
                    <div>
                        <ul style={{ margin: 0, padding: 0 }}>
                            {
                                emails.map(email => {
                                    return (
                                        <Chip
                                            label={email}
                                            size="small"
                                            variant="outlined"
                                            onDelete={() => {
                                                let allEmails = emails.filter(item => item !== email)
                                                setEmails(allEmails)
                                            }}
                                            className={`${classes.chip}`}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
                <div className="input-container">
                    <h5 className="input-container_head">
                        Title:
                    </h5>
                    <Controller
                        control={control}
                        name="title"
                        rules={{
                            required: { value: true, message: "Title is required" },
                            maxLength: { value: 50, message: "Title can be maximum 50 characters" }
                        }}
                        render={({
                            field: { onChange, name, value },
                            fieldState: { error }
                        }) => (
                            <Input
                                small
                                name={name}
                                id={name}
                                label="Title of email"
                                variant=""
                                placeholder="Enter title of email"
                                className={`${classes.input}`}
                                onChangeText={onChange}
                                value={value}
                                errorField={error}
                            />
                        )}
                    />
                </div>
                <div className="input-container">
                    <h5 className="input-container_head">
                        Message:
                    </h5>
                    <Controller
                        control={control}
                        name="message"
                        rules={{
                            required: { value: true, message: "Message is required" },
                            maxLength: { value: 500, message: "Message can be maximum 500 characters" }
                        }}
                        render={({
                            field: { onChange, name, value },
                            fieldState: { error }
                        }) => (
                            <Input
                                name={name}
                                small
                                id={name}
                                label="Title message email"
                                variant=""
                                placeholder="Enter message of email"
                                className={`${classes.input}`}
                                onChangeText={onChange}
                                value={value}
                                errorField={error}
                                rows={6}
                                multiline={true}
                            />
                        )}
                    />
                </div>
                <Grid container spacing={3} justify="flex-end">
                    <Grid item xs={2}>
                        <Button accent small fullWidth onClick={() => {
                            props.onChangeEmail(false)
                        }}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button primary small fullWidth onClick={handleSubmit(sendEmails)}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Paper>
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

export default connect(mapStateToProps, mapDispatchToProps)(EmailSender);