import { UserRegistration } from '../components/userRegistration';
import { UserLogin } from '../components/userLogin';
import React from 'react';
import { Box } from '@chakra-ui/react';

export function Login() {
  const [visible, setVisible] = React.useState(false);
  const setLoginVisibility = () => setVisible(!visible);

  return (
    <>
      <Box
        background="rgba(184, 216, 186, 0.5)"
        height="100vh"
        color="#1b1212"
        fontFamily="Verdana"
      >
        {visible ? (
          <UserRegistration setLoginVisibility={setLoginVisibility} />
        ) : (
          <UserLogin setLoginVisibility={setLoginVisibility} />
        )}
      </Box>
    </>
  );
}
