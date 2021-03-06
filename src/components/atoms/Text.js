import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => {
    return <p>{text}</p>
};

Text.propTypes = {
    text: PropTypes.string.isRequired
};

Text.defaultProps = {
    text: ''
}

export default Text;