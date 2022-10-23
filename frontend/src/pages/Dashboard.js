import React, {useState} from "react";
import ScannerForm from "../components/scannerform";
import UserStatistics from "../components/userStats";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    SelectField,
    Stack,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
import '../App.css';

//

export function Dashboard(){
    const [isResults, setIsResults] = useState(false);

    const getIsResults = (bool) => {
        setIsResults(bool)
    }

    return(
        <section className="dashboard-wrapper">
            <section className="dashboard-container">

        <section className="dashboard-scanner">
        <h1> Dashboard </h1>
        <Heading as='h3' size='md' style={{textAlign: 'left'}}>
            {!isResults ? 'Check your carbon footprint - upload a picture of your latest grocery receipt!' : 'Result'}
            </Heading>
        <ScannerForm getIsResults={getIsResults}/>
        </section>

        <section className="dashboard-user">
        <UserStatistics/>
        </section>

        </section>
        </section>
    )
}