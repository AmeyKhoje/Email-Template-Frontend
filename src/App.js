import axios from "axios";
import { useEffect } from "react";
import Button from "./components/form-elements/Button";
import './assets/style.scss';

function App() {
	return (
		<div>
			<Button accent>
				Login
			</Button>
		</div>
	);
}

export default App;