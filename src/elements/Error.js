import React from 'react';

const Error = ({ message }) => (
	<div>
		<div className="ui negative message">
			<i className="thumbs down icon"></i>
			<span className="message">{message}</span>
		</div>
</div>
);

export default Error;
