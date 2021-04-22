import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import { EditSharp } from "@material-ui/icons";
import { useEffect } from "react";
import { connect } from "react-redux";
import { colorPalette } from "../components/helpers/Globals";
import { axiosClient } from "../components/helpers/helper";
import { handleEmail, handleLoading } from "../components/store/actions/globalStateActions";
import { storeUserSentEmails } from "../components/store/actions/userActions";
import EmailListCard from "../components/ui-elements/EmailListCard";

const Dashboard = props => {

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
                    "Authorization": "Bearer "+props.user.token
                }
            })
            .then(response => {
                console.log(response);
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

    // ? UseStyles exec
    const classes = useStyles();

    return (
        <div>
            <div>
                <h1>
                    Welcome to Email Portal
                </h1>
            </div>
            { props?.user?.userSentEmails && <div>
                {
                    props?.user?.userSentEmails.map(email => {
                        return (
                            <EmailListCard sender={email.sender} title={email.title} />
                        )
                    })
                }
            </div>}
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
        onStoreEmails: (value) => dispatch(storeUserSentEmails(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);