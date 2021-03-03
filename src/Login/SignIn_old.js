import React, { useState } from 'react';

function SignIn() {

    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    
    const submitSignIn = (event) => {
        event.preventDefault()
        alert('Signed In!') 						//testing
    }


    return(
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
				<button onClick={submitSignIn}>Submit</button>
			</form>
		</>
    )   
}

export default SignIn;
