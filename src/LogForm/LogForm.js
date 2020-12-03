import React, { useState } from 'react';

const arrayOfEntries = []; //testing

function LogForm() {
	const [moodRating, setMoodRating] = useState();
	const [eventNote, setEventNote] = useState();

	function Rating() {
		this.moodRating = moodRating;
		this.eventNote = eventNote;
		this.date = Date(Date.now);
	}

	const logIt = (event) => {
		event.preventDefault();
		const newEntry = new Rating();
		arrayOfEntries.push(newEntry); //testing
		console.log(arrayOfEntries); // testing;
	};

	return (
		<>
			<form>
				<div>
					<label>
						How are you feeling today?
						<select
							id={'moodDropdown'}
							name={'moodDropdown'}
							onChange={(event) => setMoodRating(event.target.value)}>
							<option value={''}>Please make a selection</option>
							<option value={'Great!'}>Great!</option>
							<option value={'Good'}>Good</option>
							<option value={'Okay'}>Okay</option>
							<option value={'Bad'}>Bad</option>
							<option value={'Terrible!'}>Terrible!</option>
						</select>
					</label>
				</div>
				<div>
					<label>
						Anything you'd like to note about the day?
						<textarea
							id={'dayNote'}
							onChange={(event) => setEventNote(event.target.value)}
						/>
					</label>
				</div>
				<button onClick={logIt}>Log it!</button>
			</form>
		</>
	);
}

export default LogForm;
