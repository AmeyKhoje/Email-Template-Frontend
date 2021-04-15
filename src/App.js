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
import { axiosClient } from "./components/helpers/helper";
import { RouterWrapper } from "./components/helpers/RouterComponent";
import AuthLayout from "./components/ui-elements/AuthLayout";
import Register from "./pages/Register";
import { logoutUser } from "./components/store/actions/userActions";

function App(props) {
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);

	const history = useHistory();

	useEffect(() => {
		// ? Check if user logged in from localStorage
		const isUserLoggedIn = localStorage.getItem("isLoggedIn");
		const userId = localStorage.getItem("userId");

		setIsLoggedIn(isUserLoggedIn);

		if(isUserLoggedIn === "false") {
			// ? Redirect user if not logged in
			props.onLogout();
			history.push("/login");
		}
		if(isUserLoggedIn === "true") {
			// ? Authenticate user if logged in
			axiosClient({
				url: `/api/users/single-user/${userId}`,
				method: "GET"
			})
			.then(res => {
				props.onLogin(res.data.data)
			})
			.catch(err => {
				alert("Error occurred. Try after some time")
			})
		}
	}, [props.user.isLoggedIn, isLoggedIn]);

	let routes;

	if(isLoggedIn === "true") {
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
		onLogin: (value) => dispatch(loginUser(value)),
		onLogout: () => dispatch(logoutUser())
    }
};


export default connect( mapStateToProps, mapDispatchToProps )(App);