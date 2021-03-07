import React from 'react';
import Input from '../atoms/Input';
import Text from '../atoms/Text';
import PropTypes from 'prop-types';

const Field = ({
    text,
    fieldName,
    handler,
    autocompleteText,
    isRequired,
    blurHandler,
    value,
    type
}) => {
    return (
        <div className="field">
            <Text text={text} />
            <Input name={fieldName} type={type} value={value} blurHandler={blurHandler} changeHandler={handler} autocompleteText={autocompleteText} isRequired={isRequired} />
        </div>
    )
}

Field.propTypes = {
    text: PropTypes.string.isRequired,
    fieldName: PropTypes.string,
    handler: PropTypes.func,
    autocompleteText: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    blurHandler: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string
};

Field.defaultProps = {
    text: '',
    fieldName: '',
    handler: () => {},
    autocompleteText: '',
    isRequired: true,
    blurHandler:  () => {},
    value: '',
    type: 'text'
}
export default Field;