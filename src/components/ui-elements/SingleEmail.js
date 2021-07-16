import { IconButton } from "@material-ui/core"
import { Close } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux";
import Button from "../form-elements/Button"
import { handleSingleEmail } from "../store/actions/globalStateActions";

const SingleEmail = props => {
    const state = useSelector(state => state);

    const dispatch = useDispatch()

    const onHandleClose = () => {
        dispatch(handleSingleEmail(
            {
                isOpen: false,
                data: {
                    title: "Test Email",
                    from: "ameykhoje@gmail.com",
                    to: ["ameykhoje@gmail.com"],
                    message: "Test Message"
                }
            }
        ))
    }

    return (
        <div className="single-email_overlay">
            <div className="single-email">
                <div className="single-email_header">
                    <div>
                        <h3>
                            {state.global.singleEmail.title}
                        </h3>
                    </div>
                    <div>
                        <IconButton onClick={onHandleClose}>
                            <Close />
                        </IconButton>
                    </div>
                </div>
                <div className="single-email_rec-info">
                    <div className="single-email_rec-info_flex">
                        <div className="single-email_rec-info_flex-item1">
                            <p className="single-email_rec-info-text_b">
                                From:
                            </p>
                        </div>
                        <div>
                            <p className="single-email_rec-info-text">
                                {state.global.singleEmail.from}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="single-email_rec-info">
                    <div className="single-email_rec-info_flex">
                        <div className="single-email_rec-info_flex-item1">
                            <p className="single-email_rec-info-text_b">
                                To:
                            </p>
                        </div>
                        <div>
                            <ul className="single-email_rec-info-list">
                                {
                                    state.global.singleEmail.to.map(email => {
                                        return (
                                            <li className="single-email_rec-info-list_item">
                                                {email}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="single-email_body">
                    <div>
                        <h5>
                            Message:
                        </h5>
                        <p>
                            {state.global.singleEmail.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEmail;