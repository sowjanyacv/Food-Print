import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
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
import {Home} from './pages/Home';

import axios from "axios";
import { NavBar } from './components/navbar';
import {About} from './pages/About'





function App() {

  // //example of API integration with the backend 
  // //GET request to /test 
  // useEffect(() => {
  //   axios.get('/test').then(({data}) => console.log(data.text));
  // }, [])

  // //example of API integration with the backend 
  // //POST request to /testPost
  // //sending username, email and password information to the backend 
  // useEffect(() => {
  //   axios.post('/testPost', {username: 'testUser3', email: 'test3@email.com', password: '12346'})
  //   .then(({data}) => console.log(data.status));
  // }, [])


  return (
    <Router>
    <ChakraProvider theme={theme}>
    <NavBar/>
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
                    
        </Switch>

          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
    </Router>
  );
}

export default App;
