import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';

const FormSubmitButtonField = ({
    text,
    type,
    handler,
    classes,
    url,
    linkText,
    isUsernameExist
}) => {
    return (
        <div className="buttons">
            <Button type={type} handler={ handler } disabled={isUsernameExist} classes={classes} text={text} />
            <Link to={url}>{linkText} </Link>
        </div>
    )
}

export default FormSubmitButtonField;