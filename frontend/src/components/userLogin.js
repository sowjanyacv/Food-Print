import {
  Flex,
  Heading,
  Input,
  Text,
  Image,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export function UserLogin(props) {
  const [show, setShow] = React.useState(false);
  const togglePaswordVisibility = () => setShow(!show);

  return (
    <>
      <Flex width="100vw" justifyContent="space-evenly" paddingTop="40px">
        <Flex direction="column" alignItems="flex-start" width="453px">
          <Heading color="#1c7c54"> Login </Heading>
          <Text paddingTop="20px" paddingBottom="32px" fontSize="20px">
            Scan grocery reciepts for your carbon footprint score.
          </Text>
          <Text paddingBottom="16px">Email Address: </Text>
          <Input
            background="#fcfefa"
            borderRadius="none"
            placeholder="example@hotmail.com"
          />

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
          <Button
            placeSelf="center"
            marginTop="36px"
            p="12px 16px"
            background="#1c7c54"
            color="#fcfefa"
            _hover
            _active={{ bg: '#1c7c54' }}
          >
            Login
          </Button>
          <Text
            placeSelf="center"
            textAlign="center"
            fontSize="12px"
            marginTop="16px"
          >
            Don't have an account?{'  '}
            <Text
              as="b"
              color="#1c7c54"
              cursor="pointer"
              onClick={() => props.setLoginVisibility()}
            >
              Click here to Register
            </Text>
          </Text>
        </Flex>
        <Image
          width="440px"
          height="550px"
          borderRadius="40px"
          src="https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
          alt="login image"
        />
      </Flex>
    </>
  );
}
