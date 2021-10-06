import React, { useCallback, useState } from 'react';

import Message from './Message';
// Styles

import {
  StyledRegistrationForm,
  Row,
  Input,
  Label,
  Submit,
} from './RegistrationForm.style';

export const RegistrationForm = () => {
  //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //  Validation Email Input Value
  const validateEmail = (e) => {
    console.log('Validating emmail');
    //
    setEmail(e.target.value);
  };
  // Validation Password Input Value
  const validatePassword = (e) => {
    console.log('Validating password');
    //
    setPassword(e.target.value);
  };
  //  extra side effect function () //comment
  //   const sendNameToAPI = () => {
  //     console.log('sendNameToAPI ()');
  //   };
  //   sendNameToAPI(); //=> works on every time, independant
  //

  //
  const message = useCallback(() => {
    //if exist name => RUN this
    console.log('createMessage called');
    return `Welcome, ${name}, please provide email and password`;
  }, [name]);
  // re-render -after name input changes like () passes
  //
  return (
    <>
      <StyledRegistrationForm>
        <Row>
          <Label>Name:</Label>
          <Input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row>
          <Label>Email:</Label>
          <Input
            type='email'
            value={email}
            onChange={(e) => validateEmail(e)}
          />
        </Row>
        <Row>
          <Label>Password:</Label>
          <Input
            type='password'
            value={password}
            onChange={(e) => validatePassword(e)}
          />
        </Row>
        <Row>
          <Submit>Register</Submit>
        </Row>
      </StyledRegistrationForm>
      {/* // if name exist  */}
      <Message text={message} />
    </>
  );
};
