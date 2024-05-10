import { Card, Text } from '@radix-ui/themes';

interface DaysWithoutSmokingProps {
  daysWithoutSmoking: number;
}

const DaysWithoutSmoking = ({
  daysWithoutSmoking,
}: DaysWithoutSmokingProps) => {
  return (
    <Card variant='classic'>
      <Text as='div' weight='bold'>
        Dias sem fumar
      </Text>
      <Text as='div' color='gray'>
        {daysWithoutSmoking}
      </Text>
    </Card>
  );
};

export default DaysWithoutSmoking;
