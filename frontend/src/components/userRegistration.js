import {
  Flex,
  Heading,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
  Grid,
} from '@chakra-ui/react';
import React from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export function UserRegistration(props) {
  const [show, setShow] = React.useState(false);
  const togglePaswordVisibility = () => setShow(!show);

  return (
    <>
      <Flex justifyContent="center" width="100%" paddingTop="40px">
        <Flex direction="column" width="932px">
          <Heading color="#1c7c54"> Create an account </Heading>
          <Text paddingTop="20px" paddingBottom="32px" fontSize="20px">
            Scan grocery reciepts for your carbon footprint score.
          </Text>
          <Grid templateColumns="1fr 1fr" columnGap="30px">
            <Flex direction="column">
              <Text paddingBottom="16px">Username: </Text>
              <Input
                background="#fcfefa"
                borderRadius="none"
                placeholder="Name"
              />
            </Flex>
            <Flex direction="column">
              <Text paddingBottom="16px">Email Address: </Text>
              <Input
                background="#fcfefa"
                borderRadius="none"
                placeholder="example@hotmail.com"
              />
            </Flex>
            <Flex direction="column">
              <Text py="16px">Password: </Text>
              <InputGroup size="md">
                <Input
                  background="#fcfefa"
                  borderRadius="none"
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={togglePaswordVisibility}
                    variant="ghost"
                    color="#1c7c54"
                    _active
                    _hover={{ bg: '#fcfefa' }}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex direction="column">
              <Text py="16px">Confirm Password: </Text>
              <InputGroup size="md">
                <Input
                  background="#fcfefa"
                  borderRadius="none"
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={togglePaswordVisibility}
                    variant="ghost"
                    color="#1c7c54"
                    _active
                    _hover={{ bg: '#fcfefa' }}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Grid>
          <Button
            placeSelf="center"
            marginTop="36px"
            p="12px 16px"
            background="#1c7c54"
            color="#fcfefa"
            _hover
            _active={{ bg: '#1c7c54' }}
          >
            Create Account
          </Button>
          <Text
            placeSelf="center"
            textAlign="center"
            fontSize="12px"
            marginTop="16px"
          >
            Already have an account?{'  '}
            <Text
              as="b"
              color="#1c7c54"
              cursor="pointer"
              onClick={() => props.setLoginVisibility()}
            >
              Login here
            </Text>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
