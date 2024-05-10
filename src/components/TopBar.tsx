import { Card, Flex, Strong, Text } from '@radix-ui/themes';
import RemoveData from './RemoveData';

interface TopBarProps {
  user: string;
}

const TopBar = ({ user }: TopBarProps) => {
  return (
    <Card variant='classic'>
      <Flex align={'center'} justify={'between'}>
        <Text as='span'>
          Olá, <Strong>{user}</Strong>!
        </Text>
        <RemoveData />
      </Flex>
    </Card>
  );
};

export default TopBar;
