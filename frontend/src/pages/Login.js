import { UserLogin } from '../components/userLogin';
import React from 'react';
import { Box } from '@chakra-ui/react';

export function Login(props) {

  return (
    <>
      <Box
        background="rgba(184, 216, 186, 0.5)"
        height="100vh"
        color="#1b1212"
        fontFamily="Verdana"
        style={{marginTop: 0}}
      >
   
          <UserLogin  isUserLogged={props.getIsUserLogged} />
      </Box>
    </>
  );
}
