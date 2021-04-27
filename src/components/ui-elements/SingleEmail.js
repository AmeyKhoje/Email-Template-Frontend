import { IconButton } from "@material-ui/core"
import { Close } from "@material-ui/icons"
import Button from "../form-elements/Button"

const SingleEmail = props => {
    return (
        <div className="single-email_overlay">
            <div className="single-email">
                <div className="single-email_header">
                    <div>
                        <h3>
                            Email Title
                        </h3>
                    </div>
                    <div>
                        <IconButton>
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
                                ameykhoje@gmail.com
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
                                <li className="single-email_rec-info-list_item">
                                    ameykhoje@gmail.com
                                </li>
                                <li className="single-email_rec-info-list_item">
                                    ameykhoje@gmail.com
                                </li>
                                <li className="single-email_rec-info-list_item">
                                    ameykhoje@gmail.com
                                </li>
                                <li className="single-email_rec-info-list_item">
                                    ameykhoje@gmail.com
                                </li>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, et eveniet, placeat neque corporis, aliquam accusamus fugit error fuga ullam cum? Aliquid tenetur cupiditate dolorem ratione exercitationem aspernatur repellendus pariatur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleEmail;