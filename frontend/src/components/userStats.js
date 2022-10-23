import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';


function StatsCard(props) {
  const { title, stat, detail } = props;
  return (
    <Stat
      px={{ base: 1, md: 6 }}
      py={'2'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor="white"
      rounded={'lg'}>
      <StatLabel color="black" fontSize={'lg'} fontWeight={'bold'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber color="black" fontWeight={'bold'} fontSize={'2xl'} style={{fontSize: 40}}>
        {stat}
      </StatNumber>
      {detail && (
        <StatLabel color="black" fontSize={'1xl'} fontWeight={'normal'} isTruncated>
          {detail}
        </StatLabel>
      )}

    </Stat>
  );
}

export default function UserStatistics() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Your points'} stat={30} />
        <StatsCard title={'You have saved'} stat={50} detail={"tonnes of CO2"} />
      </SimpleGrid>
    </Box>
  );
}

