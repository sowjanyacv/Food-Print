import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import { NavBar } from './components/navbar';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Box height="100vh">
          <NavBar />
          <Login />
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
