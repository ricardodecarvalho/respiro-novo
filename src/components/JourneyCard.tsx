import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes';

const JourneyCard = () => {
  return (
    <Card variant='classic'>
      <Flex gap='3' align='center'>
        <Box>
          <Heading>Minha jornada sem cigarros</Heading>
          <Text align='center'>Não fumo desde o dia 6 de janeiro de 2024.</Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default JourneyCard;
