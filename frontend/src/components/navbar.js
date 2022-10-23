import {
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons';
import avatar from '../pages/avatar.png';
import { useHistory, NavLink } from 'react-router-dom';
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
    axios('/logout').then(() => {
      console.log('success logout');
      localStorage.removeItem('user');
      setLoggedIn(false);
      history.push('/login')
    });
  }

  return (
      <Flex position="fixed" top="1rem" right="1rem" align="center" justify="flex-end" height="80px">
        {/* Desktop */}

          <NavLink to="/about" style={isActive => ({
            fontWeight: isActive ? "bold" : "normal"
          })} className="navLinks">
              About
          </NavLink>


          {!loggedIn && (
            <>
              <NavLink to="/login" style={isActive => ({
            fontWeight: isActive ? "bold" : "normal"
          })} className="navLinks">
                  Login
              </NavLink>

              <NavLink to="/register" style={isActive => ({
            fontWeight: isActive ? "bold" : "normal"
          })} className="navLinks">
                  Create account
              </NavLink>
            </>
          )}


          {loggedIn && (
            <>
              <NavLink to="/dashboard" style={isActive => ({
            fontWeight: isActive ? "bold" : "normal"
          })} className="navLinks">
                  Dashboard
              </NavLink>


              <NavLink to="/receipts" style={isActive => ({
            fontWeight: isActive ? "bold" : "normal"
          })} className="navLinks">
                  Receipts
              </NavLink>

              <span onClick={logout} className="navLinks" >
                Logout
              </span>

              <img src={avatar} alt="avatar" className="avatar-navbar" />
            </>
          )}



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

      /* Mobile Content
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
      </Flex>*/
  );
};
