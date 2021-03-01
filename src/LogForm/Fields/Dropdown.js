import React from 'react';
import logFields from '../../Test_Data/data';

const goAway = logFields

function Dropdown() {
	return (
		<div>
			<form>
				<label>
					{this.props.field_name}
					<select></select>
				</label>
			</form>
		</div>
	);
}

export default Dropdown;
