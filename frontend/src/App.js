import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NavBar } from './components/navbar';
import { Login } from './pages/Login';
import { TheFooter } from './components/TheFooter';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Login />
              </Switch>
            </VStack>
          </Grid>
          <TheFooter />
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
