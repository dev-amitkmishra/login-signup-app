import React from 'react';

const Error = ({ message }) => (
	<div>
		<div class="ui negative message">
			<i class="thumbs down icon"></i>
			<span className="message">{message}</span>
		</div>
</div>
);

export default Error;
