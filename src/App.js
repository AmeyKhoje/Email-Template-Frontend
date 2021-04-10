import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Button from "./components/form-elements/Button";
import './assets/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import RouterComponent from "./components/helpers/RouterComponent";
import Loading from "./components/ui-elements/Loading";
import { connect } from "react-redux";
import { handleLoading } from "./components/store/actions";
import EmailSender from "./components/ui-elements/EmailSender";

function App(props) {
	console.log(props);
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);

	useEffect(() => {
		const userData = localStorage.getItem("userInfo");
		if(!userData) {
			setIsLoggedIn(false)
		}
		if(userData) {
			setIsLoggedIn(true)
		}
	}, []);

	return (
		<Fragment>
			<Router>
				<RouterComponent loggedIn={isLoggedIn} />
				{ props.global.isLoading && <Loading />}
				{ props.global.isEmail && <EmailSender />}
			</Router>
		</Fragment>
	);
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeLoading: (value) => dispatch(handleLoading(value))
    }
};


export default connect( mapStateToProps, mapDispatchToProps )(App);