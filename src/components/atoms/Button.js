import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, classes, handler }) => {
    return <button type={ type } className={ classes } onClick={ handler }> { text }</button>
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    classes: PropTypes.string.isRequired,
    handler: PropTypes.func
};

Button.defaultProps = {
    text: '',
    type: 'button',
    handler: () => {},
    classes: ''
}

export default Button;