import {
  daysBetween,
  cigarettesNotSmoked,
  moneySaved,
  calculateHealthBenefits,
  calculateEnvironmentalBenefits,
} from '../counters';

describe('Health Benefits Calculations', () => {
  describe('daysBetween', () => {
    it('calculate the correct difference in days', () => {
      const startDate = new Date('2023-01-01');
      const endDate = new Date('2023-01-02');
      expect(daysBetween(startDate, endDate)).toEqual(2);
    });

    it('throw an error for invalid start date', () => {
      expect(() => daysBetween(null as unknown as Date)).toThrow(
        'Data inicial inválida: forneça um objeto Date válido.'
      );
    });
  });

  describe('cigarettesNotSmoked', () => {
    it('correctly calculates the number of cigarettes not smoked', () => {
      expect(cigarettesNotSmoked(10)).toBe('200');
    });
  });

  describe('moneySaved', () => {
    it('correctly calculates the money saved', () => {
      const originalToLocaleString = Number.prototype.toLocaleString;
      Number.prototype.toLocaleString = function (locale, options) {
        if (
          locale === 'pt-BR' &&
          options?.style === 'currency' &&
          options.currency === 'BRL'
        ) {
          return `R$ ${(this as number).toFixed(2).replace('.', ',')}`;
        }
        return originalToLocaleString.apply(this, arguments as any);
      };

      expect(moneySaved(10)).toBe('R$ 120,00');

      Number.prototype.toLocaleString = originalToLocaleString;
    });
  });

  describe('calculateHealthBenefits', () => {
    it('returns the correct health benefits for the number of days without smoking', () => {
      const benefits = calculateHealthBenefits(30);
      expect(benefits).toEqual([
        'Pressão sanguínea e pulsação voltam ao normal.',
        'Níveis de monóxido de carbono no sangue normalizam.',
        'Melhora da circulação e função pulmonar.',
        'Redução de tosse e falta de ar.',
      ]);
    });
  });

  describe('calculateEnvironmentalBenefits', () => {
    it('returns the correct environmental benefits for the number of days without smoking', () => {
      const benefits = calculateEnvironmentalBenefits(1);
      expect(benefits).toEqual([
        '16 gramas de CO2 economizados (estimativa).',
        '20 bitucas de cigarro não descartadas no meio ambiente.',
        '2.5 gramas de plástico economizados pela não compra de maços.',
      ]);
    });
  });
});
