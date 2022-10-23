import { Image, Flex, Link } from '@chakra-ui/react';

export const NavBar = () => {
  return (
    <>
      <Flex
        paddingX="112px"
        width="100vw"
        height="104px"
        background="rgba(184, 216, 186, 0.5)"
        alignItems="center"
        justifyContent="space-between"
        fontFamily="Ver"
      >
        <Image
          width="187px"
          height="58px"
          src={require('../Logo.png')}
          alt="logo"
        ></Image>
        <Flex fontSize="16px" gap="32px">
          <Link _hover _active={{ fontWeight: 'bold' }}>
            About
          </Link>
          <Link _hover _active={{ fontWeight: 'bold' }}>
            Login/Create Acoount
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
