import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { Onboarding } from './pages/Onboarding';
import { NavBar } from './components/navbar';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import {Receipts} from './pages/Receipts';
import './App.css';

function App() {
  const [isUserLogged, setIsUserLogged] = React.useState(false);

  const getIsUserLogged = (status) => {
    setIsUserLogged(status)
  }

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <NavBar isUserLogged={isUserLogged} />
        <Box textAlign="center" fontSize="xl">
  
              <Switch>
                <Route path="/about">
                  <Onboarding />
                  </Route>
                <Route path="/login"><Login getIsUserLogged={getIsUserLogged} /></Route>
                <Route path="/register"><Register getIsUserLogged={getIsUserLogged} /></Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/receipts"> <Receipts /></Route>


              </Switch>
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
