import { UserRegistration } from '../components/userRegistration';
import { UserLogin } from '../components/userLogin';
import React from 'react';

export function Login() {
  const [visible, setVisible] = React.useState(false);
  const setLoginVisibility = () => setVisible(!visible);

  return (
    <>
      {visible ? (
        <UserRegistration setLoginVisibility={setLoginVisibility} />
      ) : (
        <UserLogin setLoginVisibility={setLoginVisibility} />
      )}
    </>
  );
}
