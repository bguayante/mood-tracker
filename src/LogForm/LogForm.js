import React, { useState, useEffect, useRef } from 'react';

const arrayOfEntries = []; //testing

function LogForm() {
	const [moodRating, setMoodRating] = useState('');
	const [date, setDate] = useState('');

	//Ugly as sin. Preventing useEffect from firing at load.
	const didMountRef = useRef(false);

	useEffect(() => {
		if (didMountRef.current === true) {
			const newEntry = new Rating(moodRating, date);
			arrayOfEntries.push(newEntry); //testing
			console.log(arrayOfEntries);
		} else {
			didMountRef.current = true;
		}
	});

	function Rating() {
		this.moodRating = moodRating;
		this.date = Date(Date.now);
	}

	const handleChange = (event) => {
		setMoodRating(event.target.value);
		setDate();
	};

	return (
		<>
			<select id={'moodDropdown'} onChange={handleChange}>
				<option value={0}>Please make a selection</option>
				<option value={1}>1 - Worst</option>
				<option value={2}>2</option>
				<option value={3}>3 - Best</option>
			</select>
			<p>{moodRating}</p>
		</>
	);
}

export default LogForm;
