import { Flex, Text, Heading, Box, Image } from '@chakra-ui/react';

export function Receipts() {
  return (
    <>
      <Flex
        flexDir="column"
        width="100vw"
        height="100vh"
        paddingTop="110px"
        background="#CBDBCC"
        color="#1b1212"
        fontFamily="Verdana"
        overflow="hidden"
      >
        {localStorage.getItem('user') && (
          <Heading color="#1c7c54" textAlign="center" paddingBottom="20px">
            Hello, {localStorage.getItem('user')}
          </Heading>
        )}

        <Text
          marginLeft="115px"
          paddingTop="20px"
          paddingBottom="32px"
          fontSize="20px"
        >
          Your past receipts and carbon footprint scores.
        </Text>
        <Flex
          paddingTop="42px"
          height="320px"
          width="100%"
          backgroundColor="#1c7c54"
          justifyContent="space-evenly"
        >
          <Image
            width="797px"
            height="100vh"
            src={require('./List-item-5.png')}
          ></Image>
        </Flex>
      </Flex>
    </>
  );
}
