import React, {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
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
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
           
            <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Layout />} />
          <Route path="about" element={<AboutPage />} />
          
        </Routes>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
