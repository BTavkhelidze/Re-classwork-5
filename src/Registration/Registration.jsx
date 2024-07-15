import React, { useState } from 'react';

const Registration = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  function userInput(e) {
    return setUser(e.target.value);
  }
  function passwordInput(e) {
    return setPassword(e.target.value);
  }

  return (
    <div>
      <h1>Header</h1>
      <div>
        <input onChange={userInput} type='text' placeholder='Username' />
        <input
          type='password'
          placeholder='Password'
          onChange={passwordInput}
        />
      </div>
      <p>Your Name: {user} </p>
      <p>Your Password: {password}</p>
    </div>
  );
};
export default Registration;
