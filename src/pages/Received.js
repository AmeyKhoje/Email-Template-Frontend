import { useEffect } from "react";
import { useSelector } from "react-redux";
import { axiosClient } from "../components/helpers/helper";

const Received = (props) => {

    const state = useSelector(state => state)

    const getReceivedEmails = async () => {
        await axiosClient({
            url: "api/emails/get-received-emails",
            headers: {
                "Authorization": state.user.token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"
        })
        .then(resp => {
            console.log("received",resp.data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getReceivedEmails()
    }, [])

    return (
        <div>
            <h1>Received</h1>
        </div>
    )
}

export default Received;