import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
    name,
    changeHandler,
    autocompleteText,
    isRequired,
    blurHandler,
    type
}) => {
    return <input type={type} name={name} onChange={changeHandler} onBlur={blurHandler} autoComplete={autocompleteText} required={isRequired} />
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    changeHandler: PropTypes.func,
    autocompleteText: PropTypes.string,
    isRequired: PropTypes.bool,
    blurHandler: PropTypes.func,
    type: 'text'
}

Input.defaultProps = {
    name: '',
    changeHandler: () => {},
    autocompleteText: '',
    isRequired: true,
    blurHandler:  () => {}
}

export default Input;