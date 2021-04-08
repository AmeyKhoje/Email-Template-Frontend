import axios from "axios";
import { Fragment, useEffect } from "react";
import Button from "./components/form-elements/Button";
import './assets/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import RouterComponent from "./components/helpers/RouterComponent";

function App() {
	return (
		
		<Router>
			<RouterComponent />
		</Router>
		
	);
}

export default App;