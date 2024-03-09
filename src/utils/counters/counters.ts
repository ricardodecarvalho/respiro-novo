/**
 * The number of cigarettes smoked per day.
 */
const cigarettesPerDay = 20;

/**
 * Calculates the number of days between two dates.
 * @param startDate - The start date.
 * @param endDate - The end date. Defaults to the current date.
 * @returns The number of days between the start and end dates.
 * @throws Error if the startDate is not a valid Date object.
 */
export function daysBetween(
  startDate: Date,
  endDate: Date = new Date()
): number {
  if (!(startDate instanceof Date)) {
    throw new Error('Data inicial inválida: forneça um objeto Date válido.');
  }

  const differenceInMilliseconds: number =
    endDate.getTime() - startDate.getTime() + 86400000; // Adiciona 24 horas em milissegundos para incluir hoje

  const days: number = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return days;
}

/**
 * Calculates the number of cigarettes not smoked based on the number of days.
 * @param days - The number of days without smoking.
 * @returns The number of cigarettes not smoked formatted as a string.
 */
export const cigarettesNotSmoked = (days: number): string => {
  return (days * cigarettesPerDay).toLocaleString('pt-BR');
};

/**
 * Calculates the amount of money saved based on the number of days.
 * @param days - The number of days without smoking.
 * @returns The amount of money saved formatted as a string.
 */
export const moneySaved = (days: number): string => {
  return (days * 12).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

/**
 * Represents a health benefit achieved after a certain number of days without smoking.
 */
interface HealthBenefit {
  days: number;
  benefit: string;
}

/**
 * The timeline of health benefits achieved after a certain number of days without smoking.
 */
const healthBenefitsTimeline: HealthBenefit[] = [
  { days: 1, benefit: 'Pressão sanguínea e pulsação voltam ao normal.' },
  { days: 1, benefit: 'Níveis de monóxido de carbono no sangue normalizam.' },
  { days: 14, benefit: 'Melhora da circulação e função pulmonar.' },
  { days: 30, benefit: 'Redução de tosse e falta de ar.' },
  { days: 365, benefit: 'Risco de doença coronariana é reduzido pela metade.' },
  {
    days: 1825,
    benefit:
      'Risco de câncer (boca, garganta, esôfago, bexiga) reduzido pela metade.',
  },
  {
    days: 3650,
    benefit: 'Risco de morrer de câncer de pulmão reduzido pela metade.',
  },
];

/**
 * Calculates the health benefits achieved based on the number of days without smoking.
 * @param daysWithoutSmoking - The number of days without smoking.
 * @returns An array of health benefits achieved.
 */
export const calculateHealthBenefits = (
  daysWithoutSmoking: number
): string[] => {
  return healthBenefitsTimeline
    .filter((benefit) => daysWithoutSmoking >= benefit.days)
    .map(({ benefit }) => benefit);
};

/**
 * Calculates the environmental benefits achieved based on the number of days without smoking.
 * @param daysWithoutSmoking - The number of days without smoking.
 * @returns An array of environmental benefits achieved.
 */
export const calculateEnvironmentalBenefits = (
  daysWithoutSmoking: number
): string[] => {
  const cigarettesNotSmoked = daysWithoutSmoking * cigarettesPerDay;
  const packsNotBought = cigarettesNotSmoked / cigarettesPerDay;
  const plasticPerPack = 2.5; // gramas de plástico por maço de cigarro

  const benefits: string[] = [];
  if (cigarettesNotSmoked > 0) {
    benefits.push(
      `${(cigarettesNotSmoked * 0.8).toLocaleString('pt-BR')} gramas de CO2 economizados (estimativa).`
    );
    benefits.push(
      `${cigarettesNotSmoked.toLocaleString('pt-BR')} bitucas de cigarro não descartadas no meio ambiente.`
    );
    benefits.push(
      `${packsNotBought * plasticPerPack} gramas de plástico economizados pela não compra de maços.`
    );
    if (cigarettesNotSmoked >= 3650) {
      // 10 anos
      benefits.push(
        'Redução significativa na poluição do ar e preservação de recursos naturais devido à diminuição da demanda por produção de cigarros.'
      );
    }
  }

  return benefits;
};
