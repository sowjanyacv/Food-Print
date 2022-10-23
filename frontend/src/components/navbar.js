import {
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon} from '@chakra-ui/icons';
import avatar from '../pages/avatar.png';
import { useHistory, NavLink } from 'react-router-dom';
import logo from './Logo.png';
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
      <Flex position="fixed" paddingLeft="60px" paddingRight="60px" alignItems="center"  width="100%" justifyContent="space-between" height="80px">
        {/* Desktop */}

        <img src={logo} alt="logo" className="navLogo" />

<div className="menu-nav">
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

              <div className="avatar-navbar">
              <img src={avatar} alt="avatar"  />
              </div>
            </>
          )}
          </div>



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
        paddingX="112px"
        width="100vw"
        height="104px"
        background="rgba(184, 216, 186, 0.5)"
        alignItems="center"
        justifyContent="space-between"
        fontFamily="Ver"
      >
        <Image
          width="187px"
          height="58px"
          src={require('../Logo.png')}
          alt="logo"
        ></Image>
        <Flex fontSize="16px" gap="32px">
          <Link _hover _active={{ fontWeight: 'bold' }}>
            About
          </Link>
          <Link _hover _active={{ fontWeight: 'bold' }}>
            Login/Create Acoount
          </Link>
        </Flex>
      </Flex>*/
  );
};
