import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {NavBar} from './components/navbar';
//import axios from "axios";


function App() {

  // //example of API integration with the backend 
  // useEffect(() => {
  //   axios.post('/users/register', {username: 'testUser9', email: 'test9@email.com', password: '1234678'})
  //   .then(({data}) => console.log(data.message)).catch(error => console.log('error', error));
  // }, []);

  //   useEffect(() => {
  //   axios.get('/users/info')
  //   .then(({data}) => console.log(data)).catch(error => console.log('error', error));
  // }, []);

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
