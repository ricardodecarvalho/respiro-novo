import { Theme, Flex, Container } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';
import './assets/css/App.css';

import { counters, errors } from './utils';
import ErrorBoundary from './utils/errors/ErrorBoundary/ErrorBoundary';
import JourneyCard from './components/JourneyCard';
import DaysWithoutSmoking from './components/DaysWithoutSmoking';
import CigarettesNotSmoked from './components/CigarettesNotSmoked';
import MoneySaved from './components/MoneySaved';
import HealthBenefits from './components/HealthBenefits';
import EnvironmentalBenefits from './components/EnvironmentalBenefits';

function App() {
  const daysWithoutSmoking = counters.daysBetween(new Date('2024-01-06'));
  return (
    <>
      <Theme
        accentColor="indigo"
        grayColor="gray"
        panelBackground="translucent"
        radius="medium"
      >
        <ErrorBoundary onError={errors.onErrorBoundary}>
          <Container size="4">
            <Flex direction="column" gap="3" align="center">
              <JourneyCard />
              <Flex direction="column" gap="3">
                <DaysWithoutSmoking daysWithoutSmoking={daysWithoutSmoking} />
                <CigarettesNotSmoked daysWithoutSmoking={daysWithoutSmoking} />
                <MoneySaved daysWithoutSmoking={daysWithoutSmoking} />
                <HealthBenefits daysWithoutSmoking={daysWithoutSmoking} />
                <EnvironmentalBenefits
                  daysWithoutSmoking={daysWithoutSmoking}
                />
              </Flex>
            </Flex>
          </Container>
        </ErrorBoundary>
      </Theme>
    </>
  );
}

export default App;
