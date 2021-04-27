import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Button from "./components/form-elements/Button";
import './assets/style.scss';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Login from "./pages/Login";
import RouterComponent from "./components/helpers/RouterComponent";
import Loading from "./components/ui-elements/Loading";
import { connect } from "react-redux";
import { handleLoading, loginUser } from "./components/store/actions";
import EmailSender from "./components/ui-elements/EmailSender";
import { handleEmail } from "./components/store/actions/globalStateActions";
import { axiosClient, updateUserExpiry } from "./components/helpers/helper";
import { RouterWrapper } from "./components/helpers/RouterComponent";
import AuthLayout from "./components/ui-elements/AuthLayout";
import Register from "./pages/Register";
import { logoutUser } from "./components/store/actions/userActions";
import Notification from "./components/ui-elements/Notification";
import SingleEmail from "./components/ui-elements/SingleEmail";

let logoutTimer;
function App(props) {
	const [ token, setToken ] = useState(props.user.token ? props.user.token : false);

	const history = useHistory();

	useEffect(() => {
		// ? Check if user logged in from localStorage
		const storedData = JSON.parse(localStorage.getItem("userInfo"));
		const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))

		if(isLoggedIn) {
			if(storedData) {
				const info = updateUserExpiry(storedData.token, storedData.expiryDate);
				if(info && storedData.token === info.token) {
					let updatedDataToStore = {
						token: info.token,
						expiryDate: storedData.expiryDate,
						timeRemaining: info.remainingTime
					};
					
					setToken(storedData.token);
					props.onLogin(updatedDataToStore, updatedDataToStore.timeRemaining);
				}
				else {
					alert("Unauthorized User");
					props.onLogout();
					return;
				}
			}
			else {
				props.onLogout();
				return;
			}
		}
	}, []);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userInfo"));
		if(storedData) {
			setInterval(props.onLogout, storedData.timeRemaining)
		}
	}, [props.onLogin, props?.user?.token])

	let routes;

	if(props?.user?.token) {
		// ? Routes if user logged in
		routes = (
			<RouterComponent loggedIn={props.user.isLoggedIn} />
		);
	}
	else {
		// ? Routes if user not logged in
		routes = (
			<Switch>
				<RouterWrapper path="/login" exact component={Login} layout={AuthLayout} />
				<RouterWrapper path="/register" exact component={Register} layout={AuthLayout} />
				<Redirect to="/login" />
			</Switch>
		);
	}

	useEffect(() => {
		// ? Handle email box
		history.listen((location) => {
			if(location.pathname !== "/") {
				props.onChangeEmail(false);
			}
		})
	}, [history])

	return (
		<Fragment>
			{routes}

			{/* Global Loading State */}
			{ 
				props.global.isLoading && 
				<Loading />
			}

			{/* Email Sender Component */}
			{
				props.global.isEmail &&
				<EmailSender />
			}
			{/* Notifications Component */}
			<Notification />
			{/* Single Email Component */}
			{/* <SingleEmail /> */}
		</Fragment>
	);
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeLoading: (value) => dispatch(handleLoading(value)),
		onChangeEmail: (value) => dispatch(handleEmail(value)),
		onLogin: (value, tokenExp) => dispatch(loginUser(value, tokenExp)),
		onLogout: () => dispatch(logoutUser())
    }
};


export default connect( mapStateToProps, mapDispatchToProps )(App);