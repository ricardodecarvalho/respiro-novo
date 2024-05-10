import { counters } from '../utils';
import CigarettesNotSmoked from './CigarettesNotSmoked';
import DaysWithoutSmoking from './DaysWithoutSmoking';
import EnvironmentalBenefits from './EnvironmentalBenefits';
import HealthBenefits from './HealthBenefits';
import JourneyCard from './JourneyCard';
import MoneySaved from './MoneySaved';
import { UserData } from './User';
import TopBar from './TopBar';

interface InfoProps {
  userData: UserData;
}

const Info = ({ userData }: InfoProps) => {
  const daysWithoutSmoking = counters.daysBetween(
    new Date(userData.lastSmoked)
  );

  return (
    <>
      <TopBar user={userData.name} />
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
