import {
  Avatar,
  Blockquote,
  Box,
  Card,
  Flex,
  Strong,
  Text,
} from '@radix-ui/themes';

const gravatarImage =
  'https://gravatar.com/avatar/5075a045df2aadf84953fafb0f337abc?s=200';

const JourneyCard = () => {
  return (
    <Card variant="classic">
      <Flex gap="3" align="center">
        <Avatar size="6" src={gravatarImage} radius="full" fallback="T" />
        <Box>
          <Text align="center">
            Olá, sou o Ricardo e esta é <Strong>Minha Jornada sem Fumar</Strong>
          </Text>
        </Box>
      </Flex>

      <Blockquote mt="3">
        <Strong>Não fumo cigarros</Strong> desde o dia 6 de janeiro de 2024.
      </Blockquote>
    </Card>
  );
};

export default JourneyCard;
