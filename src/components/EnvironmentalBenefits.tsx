import { Box, Card, Flex, Separator, Text } from '@radix-ui/themes';

import { counters } from '../utils';

interface EnvironmentalBenefitsProps {
  daysWithoutSmoking: number;
}

const EnvironmentalBenefits = ({
  daysWithoutSmoking,
}: EnvironmentalBenefitsProps) => {
  const environmentalBenefits =
    counters.calculateEnvironmentalBenefits(daysWithoutSmoking);
  return (
    <Card variant='classic'>
      <Text as='div' weight='bold'>
        Benefícios ambientais
      </Text>
      <Box>
        {environmentalBenefits.map((benefit, index) => (
          <Flex key={`environmental-benefits-${index}`} direction='column'>
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

export default EnvironmentalBenefits;
