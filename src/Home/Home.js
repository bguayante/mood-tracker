import React from 'react';

const fullLog = [];
const newEntry = 'stuff';

const value = '';

function Rating() {
	this.value = value;
	this.date = new Date(Date.now());
}

function logMood(value) {
	const newEntry = new Rating(value);
	fullLog.push(newEntry); // testing
	console.log(fullLog); // testing
}

// LogMood not firing on option click or select submit (or click for that matter). Something about how form events are handled.

function Home() {
	return (
		<>
			<h1>Hello World!</h1>
			<select>
				<option value={'0'}>Please select a value</option>
				<option value={1} onClick={logMood}>
					1
				</option>
				<option value={2} onClick={logMood}>
					2
				</option>
				<option value={3} onClick={logMood}>
					3
				</option>
			</select>
			<p>{newEntry}</p>
		</>
	);
}

// document.getElementById('rating').addEventListener('onSelect', logMood());

export default Home;
