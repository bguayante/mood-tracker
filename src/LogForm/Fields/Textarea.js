import React from 'react';
import logFields from '../../Test_Data/data';

function Textarea() {
	return (
		<>
			<form>
				<label>{logFields.field0.field_name}</label>
			</form>
		</>
	);
}

export default Textarea;