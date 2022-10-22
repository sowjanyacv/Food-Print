import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NavBar } from './components/navbar';
import { Dashboard } from './pages/Dashboard';

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
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </Switch>
            </VStack>
          </Grid>
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
