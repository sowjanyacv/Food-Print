import React, {useEffect} from 'react';
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

import axios from "axios";
import NavBar from './components/navbar';


function App() {

  //example of API integration with the backend 
  //GET request to /test 
  useEffect(() => {
    axios.get('/test').then(({data}) => console.log(data.text));
  }, [])

  //example of API integration with the backend 
  //POST request to /testPost
  //sending username, email and password information to the backend 
  useEffect(() => {
    axios.post('/testPost', {username: 'testUser3', email: 'test3@email.com', password: '12346'})
    .then(({data}) => console.log(data.status));
  }, [])


  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          
          <VStack spacing={8}>
            <NavBar></NavBar>
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
