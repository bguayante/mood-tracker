import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LogForm from '../LogForm/LogForm.js';
import SignUp from '../Login/SignUp';
import SignInExample from '../Login/SignIn'

class Home extends Component {
	render() {
		return (
			<>
				<Router>
					<div>
						<nav>
							<ul>
								<li>
									<Link to='/signUp'>Sign Up</Link>
								</li>
								<li>
									<Link to='/signIn'>Sign In</Link>
								</li>
								<li>
									<Link to='/log'>Log Your Day</Link>
								</li>
							</ul>
						</nav>
					</div>

					<Switch>
						<Route path='/signUp'>
							<SignUp />
						</Route>
						<Route path='/signIn'>
							<SignInExample />
						</Route>
						<Route path='/log'>
							<LogForm />
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
}

export default Home;