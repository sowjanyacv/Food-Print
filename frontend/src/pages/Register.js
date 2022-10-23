import { UserRegistration } from '../components/userRegistration';
import React from 'react';
import { Box } from '@chakra-ui/react';

export function Register(props) {

  return (
    <>
      <Box
        background="rgba(184, 216, 186, 0.5)"
        height="100vh"
        color="#1b1212"
        fontFamily="Verdana"
      >
          <UserRegistration isUserLogged={props.getIsUserLogged} />

      </Box>
    </>
  );
}