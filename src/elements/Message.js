import React from 'react';

const Message = ({ message }) => (
	<div>
		<div className="ui positive message">
			<i className="thumbs up icon"></i>
			<span className="message">{message}</span>
		</div>
</div>
);

export default Message;
