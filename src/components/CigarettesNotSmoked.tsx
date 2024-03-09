import { Card, Text } from '@radix-ui/themes';

import { counters } from '../utils';

interface CigarettesNotSmokedProps {
  daysWithoutSmoking: number;
}

const CigarettesNotSmoked = ({
  daysWithoutSmoking,
}: CigarettesNotSmokedProps) => {
  return (
    <Card variant="classic">
      <Text as="div" weight="bold">
        Cigarros deixados de fumar
      </Text>
      <Text as="div" color="gray">
        {counters.cigarettesNotSmoked(daysWithoutSmoking)}
      </Text>
    </Card>
  );
};

export default CigarettesNotSmoked;
