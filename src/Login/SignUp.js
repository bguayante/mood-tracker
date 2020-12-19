import React, { useState } from 'react';

function SignUp() {
	const [username, setUserName] = useState('');
	const [password, setPassWord] = useState('');

	function User() {
		this.username = username;
		this.password = password;
	}

	//NEED TO ROUTE TO SIGN IN ON CLICK//
	const submitSignUp = (event) => {
		event.preventDefault();
		const newUser = new User();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser),
		};
		// fetch('http://localhost:4000/user/new/', requestOptions).then((response) => response.json)
	};

	return (
		<>
			<form>
				<label>
					Username:
					<input
						type='text'
						id='username'
						onChange={(event) => setUserName(event.target.value)}
						required={true}></input>
				</label>
				<label>
					Password:
					<input
						type='password'
						id='password'
						onChange={(event) => setPassWord(event.target.value)}
						required={true}
					/>
				</label>
				<button onClick={submitSignUp}>Submit</button>
			</form>
		</>
	);
}

export default SignUp;
