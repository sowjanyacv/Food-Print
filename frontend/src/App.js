import React, {useEffect, useState} from 'react';
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
import {About} from './pages/About';
import {NavBar} from './components/navbar';
import axios from "axios";


function App() {
  const [file, setFile] = useState('');

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

const uploadFile = (e) => {
  e.preventDefault();
  const uploadedFile = e.target.files[0]
      console.log('uploadedFile', uploadedFile);
      const formData = new FormData();
      formData.append("title", 'receipt');
      formData.append('file', uploadedFile);

      // for (const value of formData.values()) {
      //   console.log('formData val', value);
      // }

      axios.post('/receipts/scan', formData).then(({data}) => console.log('data', data));
    }


  return (
    <Router>
    <ChakraProvider theme={theme}>
    <NavBar/>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>

        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => uploadFile(e)}
        />

          
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
