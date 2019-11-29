import React, { useEffect } from 'react';
import Test from './Test';

export default props => {
	const { value_a, value_b, updateB } = props;
	useEffect(() => {
		setTimeout(() => {
			updateB('new value for B');
		}, 3000);
	}, []);
	return (
		<>
			<h3>I have access to store. Store values are:</h3>
			<div className="mt-2">
				<div><b>value_a:</b> {value_a}</div>
				<div><b>value_b:</b> {value_b}</div>
			</div>
			<Test />
		</>
	);
}