import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import { EditSharp } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { colorPalette } from "../components/helpers/Globals";
import { axiosClient } from "../components/helpers/helper";
import { closeNotification, handleEmail, handleLoading, handleNotification, handleSingleEmail } from "../components/store/actions/globalStateActions";
import { storeUserSentEmails } from "../components/store/actions/userActions";
import EmailListCard from "../components/ui-elements/EmailListCard";

const Dashboard = props => {

    const [ emails, setEmails ] = useState([])

    console.log(props.user);

    // ? MakeStyles using material-ui
    const useStyles = makeStyles({
        iconContainer: {
            backgroundColor: colorPalette.primary,
            padding: "15px",
            position: "fixed",
            bottom: "50px",
            right: "50px",
            zIndex: "100",
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

    const getUserSentEmails = async () => {
        try {
            axiosClient({
                method: "GET",
                url: "/api/emails/all",
                headers: {
                    "Authorization": props.user.token
                }
            })
            .then(response => {
                if(response.data.isError) {
                    alert("Failed to get emails");
                    return;
                }
                if(!response.data.isError) {
                    props.onStoreEmails(response.data.data);
                    
                    return;
                }
            })
            .catch(error => {
                console.log(error);
                return;
            })
        }
        catch(error) {
            console.log(error);
            return;
        }
    };

    useEffect(() => {
        getUserSentEmails()
    }, [])

    const makeEmailStarred = (id, sender) => {
        const notiVal = {
            head: "Hey"+ id,
            text: "Your data is being processed"
        }
        props.onChangeNotification(notiVal);
        try {
            axiosClient({
                method: "PATCH",
                url: "/api/emails/starred",
                headers: {
                    "Authorization": "Bearer "+props.user.token,
                    "Content-Type": "application/json"
                },
                data: {
                    id: id,
                    sender: sender
                }
            })
            .then(response => {
                if(response.data.isError) {
                    alert("Unable to make email starred. Try again later");
                    return;
                }
                if(!response.data.isError) {
                    getUserSentEmails();
                    return;
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
        catch(error) {
            alert("Something went wrong. Try again later.")
        }
    }

    // ? UseStyles exec
    const classes = useStyles();

    const onEmailClicked = (email) => {
        console.log(email);
        let openEmail = {
            isOpen: true,
            data: {
                title: email.title,
                from: email.sender,
                to: email.receivers.split(","),
                message: email.message
            }
        }
        props.onEmailClicked(openEmail)
    }

    return (
        <div>
            <div>
                <h1>
                    Welcome to Email Portal
                </h1>
            </div>
            <div>
                {
                    !props?.user?.userSentEmails &&
                    <p>
                        No sent emails found.
                    </p>
                }
            </div>
            { props?.user?.userSentEmails && 
                <div>
                    {
                        props?.user?.userSentEmails.map(email => {
                            return (
                                <EmailListCard 
                                    sender={email.sender} 
                                    title={email.title} 
                                    isStarred={email.starred === 1 ? true : false} 
                                    onStarredAction={() => makeEmailStarred(email.id, email.sender)}
                                    onEmailClicked={() => onEmailClicked(email)} />
                            )
                        })
                    }
                </div>
            }
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
        onChangeEmail: (value) => dispatch(handleEmail(value)),
        onStoreEmails: (value) => dispatch(storeUserSentEmails(value)),
        onChangeNotification: (value) => {
            dispatch(handleNotification(value))
            setTimeout(() => {
                dispatch(closeNotification(false))
            }, 3000)
        },
        onEmailClicked: (value) => dispatch(handleSingleEmail(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);