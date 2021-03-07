import React, { useState } from 'react';
import classNames from 'classnames';
import {
  registerUser,
  validateUsername
} from '../../services';
import Message from '../../elements/Message';
import Error from '../../elements/Error';
import {
  SIGNUP,
  USERNAME,
  PASSWORD,
  ERRORINSIGNUP,
  SIGNUPSUCCESSMESSAGE,
  LOGINPATH
} from '../../constants';
import Heading from '../atoms/Heading';
import Field from '../molecules/Field';
import FormSubmitButtonField from '../molecules/FormSubmitButtonField';

const Signup = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameExist, setIsUsernameExist] = useState(false);
  const [error, setError] = useState(false);
  const [register, setRegister] = useState(false);

  const handleOnChangeFirstName = e => {
    setFirstname(e.target.value);
  };

  const handleOnChangeLastName = e => {
    setLastname(e.target.value);
  };

  const handleOnChangeUserName = e => {
    setUsername(e.target.value);
  };

  const handleOnChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleOnBlur = async e => {
    setUsername(e.target.value);
    const data = {
      userName: userName,
    };
    const isUsernameAlreadyRegistered = await validateUsername(data);

    isUsernameAlreadyRegistered === 204 ? setIsUsernameExist(true) : setIsUsernameExist(false);
  };

  const onSubmit = async e => {
    e.preventDefault ();
    const data = {
      firstName: firstname,
      lastName: lastname,
      userName: userName,
      password: password,
    };

    const registerStatus = await registerUser (data);
    if (registerStatus === 200) {
      setRegister(true);
      setError(false);
      setFirstname('');
      setLastname('');
      setUsername('');
      setPassword('');
    } else {
      setRegister(false);
      setError(true);
    }
  };

  return (
    <>
      <div className="ui form Registration">
        <Heading Tag='h1' text={SIGNUP.HEADING}/>
        <form onSubmit={onSubmit}>
          <div>
          <Field text={SIGNUP.FIRSTNAME} value={firstname} fieldName={SIGNUP.FIRSTNAME} handler={handleOnChangeFirstName} autocompleteText={SIGNUP.FIRSTNAME} isRequired={true} />
          <Field text={SIGNUP.LASTNAME} value={lastname} fieldName={SIGNUP.LASTNAME} handler={handleOnChangeLastName} autocompleteText={SIGNUP.LASTNAME} isRequired={true} />
          <Field text={USERNAME} value={userName} classes={classNames ({error: isUsernameExist})} blurHandler={handleOnBlur} fieldName={USERNAME} handler={handleOnChangeUserName} autocompleteText={USERNAME} isRequired={true} />
          <Field text={PASSWORD} type="password" value={password} fieldName={PASSWORD} handler={handleOnChangePassword} autocompleteText={PASSWORD} isRequired={true} />
          <FormSubmitButtonField text={SIGNUP.TEXT} isUsernameExist={isUsernameExist} classes='ui primary button' handler={ onSubmit } type='submit' url={LOGINPATH} linkText={SIGNUP.CANCEL} />
          </div>
        </form>
        {error && <Error message={ERRORINSIGNUP} />}
        {register && <Message message={SIGNUPSUCCESSMESSAGE} />}
      </div>
    </>
  )
}

export default Signup;