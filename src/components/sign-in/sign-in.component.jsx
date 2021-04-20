import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleEmail}
          label='email'
          required
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handlePassword}
          label='password'
          required
        />

        <input type='submit' value='Submit Form' />
      </form>
    </div>
  );
}
export default SignIn;
