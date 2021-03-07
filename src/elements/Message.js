import React from 'react';

const Message = ({ message }) => (
	<div>
		<div class="ui positive message">
			<i class="thumbs up icon"></i>
			<span className="message">{message}</span>
		</div>
</div>
);

export default Message;
