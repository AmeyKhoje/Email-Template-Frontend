import { useEffect, useState } from "react";
import { connect } from "react-redux";
import EmailListCard from "../components/ui-elements/EmailListCard";

const Starred = props => {
    const [ starredEmails, setStarredEmails ] = useState([]);

    useEffect(() => {
        if(props?.user?.userSentEmails) {
            let starred = props?.user?.userSentEmails.filter(x => x.starred === 1);
            setStarredEmails(starred)
        }
    }, []);
    console.log(starredEmails);
    return (
        <div>
            <div>
                <h3>
                    Starred Emails
                </h3>
            </div>
            <div>
                {
                    starredEmails.length === 0 &&
                    <p>No starred emails</p>
                }
            </div>
            <div>
                {
                    starredEmails.length > 0 &&
                    starredEmails.map(email => {
                        return (
                            <EmailListCard sender={email.sender} receivers={email.receivers} title={email.title} isStarred={email.starred === 1 ? true : false} />
                        )
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Starred);