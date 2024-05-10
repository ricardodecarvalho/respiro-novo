import { Box, Card, Flex, Separator, Text } from '@radix-ui/themes';

import { counters } from '../utils';

interface HealthBenefitsProps {
  daysWithoutSmoking: number;
}

const HealthBenefits = ({ daysWithoutSmoking }: HealthBenefitsProps) => {
  const healthBenefits = counters.calculateHealthBenefits(daysWithoutSmoking);
  return (
    <Card variant='classic'>
      <Text as='div' weight='bold'>
        Benefícios de saúde
      </Text>
      <Box>
        {healthBenefits.map((benefit, index) => (
          <Flex key={`benefit-${index}`} direction='column'>
            <Separator my='2' size='4' />
            <Text as='div' color='gray'>
              {benefit}
            </Text>
          </Flex>
        ))}
      </Box>
    </Card>
  );
};

export default HealthBenefits;
