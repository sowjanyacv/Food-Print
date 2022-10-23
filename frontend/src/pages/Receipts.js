import { Flex, Text, Heading} from '@chakra-ui/react';

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
          <section className="logs">
          <div className="log-item-open">
          <span className="logDay">23 October</span> <span className="logDate">3 days ago</span>

          <ul>
          <li>Zuchinni Green - 0.778kg</li>
          <li>Banana - 0.442kg</li>
          <li>Potatoes - 1.328kg</li>
          <li>Lettuce - 1.174kg</li>
          <li>Mango - 1 piece</li>
          </ul>

          <p>total price: 7£</p>

          <div style={{lineHeight: 1.1, marginTop: '10Px'}}>
          <p>The carbon footprint of this grocery shop is <strong>medium</strong>.</p>
          <p>You gained 10 points for saving an <strong>extra 0.5 tonnes</strong> of CO2!</p>
          </div>
          </div>
          <div className="log-item-closed"> October 15</div>
          <div className="log-item-closed"> October 12</div>
          </section>



        </Flex>
      </Flex>
    </>
  );
}
