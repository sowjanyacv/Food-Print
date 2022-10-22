import {
  Flex,
  Heading,
  Input,
  Text,
  Grid,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import React from 'react';

export function UserLogin(props) {
  const [show, setShow] = React.useState(false);
  const togglePaswordVisibility = () => setShow(!show);

  return (
    <>
      <Flex
        flexDir="column"
        margin="0"
        width="100%"
        height="100%"
        alignItems="center"
        px={{ base: '20px', md: '36px' }}
      >
        <Heading> Login </Heading>
        <Grid
          width="80%"
          templateColumns="10% 90%"
          rowGap={{ base: '20px', md: '30px' }}
          px={{ base: '20px', md: '36px' }}
          py={{ base: '20px', md: '36px' }}
          textAlign="start"
          alignItems="center"
          justifyContent="center"
        >
          <Text>Email: </Text>
          <Input placeholder="examplename@example.com" />

          <Text>Password: </Text>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={togglePaswordVisibility}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button placeSelf="flex-start">Submit</Button>
        </Grid>
        <Text>
          Haven't Registered?{'  '}
          <Text
            as="u"
            _hover={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => props.setLoginVisibility()}
          >
            Click here to Register
          </Text>
        </Text>
      </Flex>
    </>
  );
}
