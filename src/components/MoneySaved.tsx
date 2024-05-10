import { Card, Text } from '@radix-ui/themes';

import { counters } from '../utils';

interface MoneySavedProps {
  daysWithoutSmoking: number;
}

const MoneySaved = ({ daysWithoutSmoking }: MoneySavedProps) => {
  return (
    <Card variant='classic'>
      <Text as='div' weight='bold'>
        Gastos economizados
      </Text>
      <Text as='div' color='gray'>
        {counters.moneySaved(daysWithoutSmoking)}
      </Text>
    </Card>
  );
};

export default MoneySaved;
