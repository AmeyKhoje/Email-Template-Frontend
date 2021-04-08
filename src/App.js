import axios from "axios";
import { useEffect } from "react";
import Button from "./components/form-elements/Button";
import './assets/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
			</Switch>
		</Router>
	);
}

export default App;