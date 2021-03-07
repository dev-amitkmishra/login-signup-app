import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Login from './pages/Login';
import Signup from "./pages/Signup";
import { loginUser } from "../services";
import { SIGNUPPATH, HOMEPATH } from "../constants";

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [username, setUsername] = useState('');
	const [error, setError] = useState(false);
	const loginHandler = async (data) => {
		const loginResult = await loginUser(data);
		if (loginResult !== 200) {
			setIsAuthenticated(false);
			setError(true);
		} else {
			setUsername(data.userName);
			setIsAuthenticated(true);
		}
	};
	const logoutHandler = () => {
		setIsAuthenticated(false);
		setError(false);
	};
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path={SIGNUPPATH} component={Signup} />
					<Route path="/login" exact>
						{isAuthenticated ? (
						<Redirect to={HOMEPATH} username={username} logoutHandler={logoutHandler} />
						) : (
							<Login loginHandler={loginHandler} error={error} />
						)}
					</Route>
					<ProtectedRoute
						isAuthenticated={isAuthenticated}
						path={HOMEPATH}
						logoutHandler={logoutHandler}
						username={username}
						component={Home}
					/>
					<Redirect from="/" to="login" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
