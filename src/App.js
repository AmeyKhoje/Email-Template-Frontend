import axios from "axios";
import { Fragment, useEffect } from "react";
import Button from "./components/form-elements/Button";
import './assets/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import RouterComponent from "./components/helpers/RouterComponent";
import Loading from "./components/ui-elements/Loading";
import { connect } from "react-redux";
import { handleLoading } from "./components/store/actions";

function App(props) {
	console.log(props);
	return (
		
		<Fragment>
			<Router>
				<RouterComponent />
				{ props.global.isLoading && <Loading />}
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