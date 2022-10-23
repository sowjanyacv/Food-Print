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
  CircularProgress
} from '@chakra-ui/react';
import React, { useState } from 'react';
import pictureIcon from './picture.png';
import nextRewardBar from './nextRewardBar.png';
//import { ReactComponent as NextRewardBar } from './nextRewardBar.svg';

import axios from "axios";


const ScannerForm = ({getIsResults}) => {
  const [file, setFile] = useState('');
  const [receiptFoodLog, setReceiptFoodLog] = useState('');
  const [carbonFootprintScore, setCarbonFootprintScore] = useState('');
  const [reminder, setReminder] = useState('');
  const [scanLoading, setScanLoading] = useState(true);


  const uploadFile = async (e) => {
    e.preventDefault();
    setFile(e.target.files[0])
  }

  const sendFileForScan = async () => {
    if(!file) return;

    setScanLoading(true);
    console.log('uploadedFile', file);
    const formData = new FormData();
    formData.append("title", 'receipt');
    formData.append('file', file);

    const data = await axios.post('/receipts/scan', formData);
    setScanLoading(false);
    getIsResults(true);
    const { data: { receiptFoodLog, carbonFootprintScore, reminder } } = data;
    setReceiptFoodLog(receiptFoodLog.replace(/,\s*$/, ""));
    setCarbonFootprintScore(carbonFootprintScore);
    setReminder(reminder);
  }



  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      align="center"
      justify="center"
      direction="column"
      css={{
        backgroundColor: 'white'
      }}
    >
      {scanLoading && (
        <div className="loadingScan">
          <CircularProgress isIndeterminate  color='#1C7C54' size='170px'/>
        </div>
      )}

      {!receiptFoodLog && !carbonFootprintScore && !reminder && !scanLoading && (
        <>
          <Flex
            bg={'#B8D8BA'}
            borderRadius="lg"
            justify="center"
            align="center"
            w='100%'
            mt={5}
            h={200}
            shadow="base"
          >

            <form className="receiptForm">
              <label for="file" className="pictureLabel" >
                <img src={pictureIcon} alt="pictureIcon" className="pictureIcon" />
                <p>Upload your receipt </p>
                <input type="file" name="file" id="file" onChange={(e) => uploadFile(e)} className="upload-input" />
              </label>

              <Button onClick={sendFileForScan} bg="#1C7C54" size='lg' color="white" mt={5} style={{fontSize: '14px'}} disabled={!file}> Submit </Button>
            </form>
          </Flex>
        </>

      )}


      {receiptFoodLog && carbonFootprintScore && (
        <section className="results-wrapper">

          <section className="carbonFootprint-results">
            <div className="carbonFootprintScore-text">
              <p>The carbon footprint of this grocery shop is</p>
            </div>
            <div className="carbonFootprintScore">
              <p style={{ color: carbonFootprintScore === 'low' ? 'green' : carbonFootprintScore === 'medium' ? '#E77C40' : '#c60000' }}>{carbonFootprintScore}</p>
            </div>
          </section>

          <p className="foodDetails-results">Fresh food items scanned in the receipt: {receiptFoodLog} </p>

          <div className="text-container-results-details">
          {(carbonFootprintScore === 'medium' || carbonFootprintScore === 'low') && (
              <p className="results-text-details">You have gained <strong>{carbonFootprintScore === 'medium' ? 10 : 20} points</strong>! You saved an extra <strong>{carbonFootprintScore === 'medium' ? 0.5 : 0.8} tonnes</strong> of CO2 just from your shopping!</p>
            )}

            <p className="results-text-details"> We will send you notifications to remind you to eat your items before they go to waste! </p>

        
            {carbonFootprintScore === 'high' && (
              <p className="results-text-details">You are not awarded any points this time! Try buying more <strong>local</strong> and <strong>plant-based food</strong> to lower your carbon footprint 💪</p>
            )}
          </div>

          <div className="cta-results">
          <Button bg="#1C7C54" size='lg' color="white" mt={5} style={{fontSize: '14px'}}> See details</Button><Button bg="#1C7C54" size='lg' color="white" mt={5} style={{fontSize: '14px'}}> Upload another</Button>
          </div>


        </section>
      )}

      <section className="scores-reward-wrapper">
        <Heading as='h3' size='md' style={{ alignSelf: 'flex-start' }}>
          Progress to next reward
        </Heading>
        <section className="scores-reward-container">
          <img src={nextRewardBar} alt="rewardBar" className="reward-bar" />
          <p className="pointsReward">{carbonFootprintScore === 'medium' ? 40 - 10 : carbonFootprintScore === 'low' ? 40-20 : 40} more points</p>

          <Button bg="#1C7C54" size='lg' color="white" mt={5} style={{fontSize: '14px'}}> Go to scores</Button>
        </section>
      </section>



    </Flex>

  );
};

export default ScannerForm;
