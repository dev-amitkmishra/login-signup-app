import React, { useState } from 'react';
import Heading from '../atoms/Heading';
import Error from '../../elements/Error';
import {
  LOGIN,
  ERRORINLOGIN,
  USERNAME,
  PASSWORD,
  SIGNUP,
  SIGNUPPATH
} from '../../constants';
import Field from '../molecules/Field';
import FormSubmitButtonField from '../molecules/FormSubmitButtonField';

const Login = ({
   loginHandler,
   error
}) => {
  
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    const data = {
      userName: userName,
      password: password,
    };
    loginHandler(data);
  };
  return (
    <>
      <div className="Login">
        <Heading Tag='h1' text={LOGIN}/>
        <form onSubmit={onSubmit} className="ui form">
          <div>
            <Field text={USERNAME} value={userName} fieldName={USERNAME} handler={usernameChangeHandler} autocompleteText={USERNAME} isRequired={true} />
            <Field text={PASSWORD} value={password} type="password" fieldName={PASSWORD} handler={passwordChangeHandler} autocompleteText={PASSWORD} isRequired={true} />
            <FormSubmitButtonField text={LOGIN} classes='ui primary button' handler={ onSubmit } type='button' url={SIGNUPPATH} linkText={SIGNUP.TEXT} />
          </div>
        </form>
        {error && <Error message={ERRORINLOGIN} />}
      </div>
    </>
  )
}

export default Login;