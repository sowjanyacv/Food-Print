import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import avatar from '../pages/avatar.png';
import { useHistory, Link } from 'react-router-dom';
import React from 'react';
import axios from "axios";

export const NavBar = (props) => {
  const [display, changeDisplay] = React.useState('none');
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('user'));
  const history = useHistory();

  React.useEffect(() => {
 setLoggedIn(localStorage.getItem('user'));
  }, [props.isUserLogged])

  const logout = () => {
    console.log('LOGOUT')
    axios('/logout').then(() => {
      console.log('success logout');
      localStorage.removeItem('user');
      setLoggedIn(false);
      history.push('/login')
    });
  }

  return (
    <Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={['none', 'none', 'flex', 'flex']}>
          <Link to="/about">
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>


          {!loggedIn && (
            <>
              <Link to="/login">
                <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
                  Create account
                </Button>
              </Link>
            </>
          )}


          {loggedIn && (
            <>
              <Link to="/dashboard">
                <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
                  Dashboard
                </Button>
              </Link>


              <Link to="/receipts">
                <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
                  Receipts
                </Button>
              </Link>

              <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%" onClick={logout}>
                Logout
              </Button>

              <img src={avatar} alt="avatar" className="avatar-navbar" />
            </>
          )}


        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        {/* <Switch color="#green" isChecked={isDark} onChange={toggleColorMode} /> */}
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />

          <Flex flexDir="column" align="center">
            <Link href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </Link>

            <Link href="/about" passHref>
              <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
                About
              </Button>
            </Link>

            <Link href="/contact" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={5}
                w="100%"
              >
                Contact
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
