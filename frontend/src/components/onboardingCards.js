import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export function OnboardingCards(props) {
  return (
    <>
      <Box
        width="325px"
        height="392px"
        border="1px solid #FCFEFA"
        borderRadius="40px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        background="#FCFEFA"
        overflow="hidden"
      >
        <Image
          src={props.data.image}
          height="231px"
          width="100%"
          objectFit="cover"
        ></Image>
        <Flex
          direction="column"
          alignItems="flex-start"
          gap="10px"
          justifyContent="center"
          padding="30px 35px"
        >
          <Heading color="#1c7c54" fontSize="24px">
            {props.data.heading}
          </Heading>
          <Text fontSize="16px">{props.data.description}</Text>
        </Flex>
      </Box>
    </>
  );
}
