import { Button } from '@radix-ui/themes';
import { counters } from '../utils';
import CigarettesNotSmoked from './CigarettesNotSmoked';
import DaysWithoutSmoking from './DaysWithoutSmoking';
import EnvironmentalBenefits from './EnvironmentalBenefits';
import HealthBenefits from './HealthBenefits';
import JourneyCard from './JourneyCard';
import MoneySaved from './MoneySaved';
import { UserData } from './User';
import { useCookies } from 'react-cookie';

interface InfoProps {
  userData: UserData;
}

const Info = ({ userData }: InfoProps) => {
  const [_, __, removeCookie] = useCookies(['user']);

  const daysWithoutSmoking = counters.daysBetween(
    new Date(userData.lastSmoked)
  );

  const handleClear = () => {
    removeCookie('user');
  };

  return (
    <>
      <div>
        <p>Olá {userData.name}</p>
        <Button onClick={handleClear}>Limpar</Button>
      </div>
      <JourneyCard />
      <DaysWithoutSmoking daysWithoutSmoking={daysWithoutSmoking} />
      <CigarettesNotSmoked daysWithoutSmoking={daysWithoutSmoking} />
      <MoneySaved daysWithoutSmoking={daysWithoutSmoking} />
      <HealthBenefits daysWithoutSmoking={daysWithoutSmoking} />
      <EnvironmentalBenefits daysWithoutSmoking={daysWithoutSmoking} />
    </>
  );
};

export default Info;
