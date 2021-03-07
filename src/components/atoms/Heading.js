import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ Tag, className, text }) => {
   return (
      <Tag className={className}>
        {text}
      </Tag>
   );
}

Heading.propTypes = {
   Tag: PropTypes.string.isRequired,
   className: PropTypes.string,
   text: PropTypes.string.isRequired
}

Heading.defaultProps = {
    Tag: '',
    className: '',
    text: ''
}

export default Heading;