import { Flex, useColorModeValue, Text } from '@chakra-ui/react';

export function TheFooter() {
  return (
    <>
      <Flex
        as="footer"
        bg={useColorModeValue('gray.100', 'gray.900')}
        p={5}
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: 'xl', md: 's' }}
      >
        <Text fontSize="12px">
          Copyright©FoodPrint,2022. All Rights Reserved
        </Text>
      </Flex>
    </>
  );
}
