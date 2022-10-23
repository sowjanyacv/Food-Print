import { Image, Flex, Link, Avatar } from '@chakra-ui/react';

export const InnerNavBar = () => {
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
        <Flex fontSize="16px" gap="32px" alignItems="center">
          <Link _hover _active={{ fontWeight: 'bold' }}>
            Dashboard
          </Link>
          <Link _hover _active={{ fontWeight: 'bold' }}>
            About
          </Link>
          <Link _hover _active={{ fontWeight: 'bold' }}>
            Reciepts
          </Link>
          <Link _hover _active={{ fontWeight: 'bold' }}>
            Logout
          </Link>
          <Avatar
            size="md"
            border="#1c7c54 solid 1px"
            src="https://images.unsplash.com/photo-1606416132922-22ab37c1231e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
          />
        </Flex>
      </Flex>
    </>
  );
};
