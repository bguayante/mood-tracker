import React, { useState } from 'react';

function LogForm() {
	const [moodRating, setMoodRating] = useState(null);
	const [eventNote, setEventNote] = useState(null);

	function Rating() {
		this.moodRating = moodRating;
		this.eventNote = eventNote;
		this.date = Date(Date.now);
	}

	const arrayOfEntries = []; //testing

	const logIt = (event) => {
		event.preventDefault();
		const newEntry = new Rating();
		// convert to json, send to api //
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
							id={'moodRatingDropdown'}
							onChange={(event) => setMoodRating(event.target.value)}
							required={true}>
							<option>Please make a selection</option>
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
							id={'eventNoteText'}
							onChange={(event) => setEventNote(event.target.value)}
						/>
					</label>
				</div>
				<div>
					<button onClick={logIt}>Log it!</button>
				</div>
			</form>
		</>
	);
}

export default LogForm;
