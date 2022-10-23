import { Flex, Button, Heading } from '@chakra-ui/react';
import { OnboardingCards } from '../components/onboardingCards';
import { Link } from 'react-router-dom';

export function Onboarding() {
  const getStartedRoute = localStorage.getItem('user') ? '/dashboard' : '/register';

  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1594404430367-9858af713541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      heading: 'Scan receipts',
      description:
        'Scan your grocery receipts for your carbon footprint score.',
    },

    {
      image:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2813&q=80',
      heading: 'Collect points',
      description: 'Get points for buying low carbon footprint groceries.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      heading: 'Reduce waste',
      description:
        'Get reminders for when your groceries expire, so they don’t go to waste.',
    },
  ];
  return (
    <>
      <Flex
        flexDir="column"
        width="100vw"
        height="100vh"
        paddingTop="110px"
        background="#b8d8ba"
        color="#1b1212"
        fontFamily="Verdana"
      >
        {localStorage.getItem('user') && (
          <Heading color="#1c7c54" textAlign="center" paddingBottom="20px">
            Hello, {localStorage.getItem('user')}
          </Heading>
        )}

        {/* <Text
          marginLeft="115px"
          paddingTop="20px"
          paddingBottom="32px"
          fontSize="20px"
        >
          Let's get started.
        </Text> */}
        <Flex
          paddingTop="42px"
          height="320px"
          width="100%"
          backgroundColor="#1c7c54"
          justifyContent="space-evenly"
        >
          {data.map(value => (
            <OnboardingCards data={value} />
          ))}
        </Flex>

        <Link to={getStartedRoute}>
          <Button
            placeSelf="center"
            marginTop="145px"
            p="12px 16px"
            background="#1c7c54"
            color="#fcfefa"
            _hover
            _active={{ bg: '#1c7c54' }}
          >
            Get Started
          </Button>
        </Link>
      </Flex>
    </>
  );
}
