import { useTranslation } from '../../../i18n';
import { Card } from './Card';

export const CardBanner = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, 'cardBanner');

  const cards = [
    {
      icon: `/${lng}/checklist.svg`,
      title: t('cardBanner.cards.carePlan.title'),
      description: t('cardBanner.cards.carePlan.description'),
      backgroundColor: '#FFE4E6',
    },
    {
      icon: `/${lng}/stethoscope.svg`,
      title: t('cardBanner.cards.telehealth.title'),
      description: t('cardBanner.cards.telehealth.description'),
      backgroundColor: '#E0F2FE'
    },
    {
      icon: `/${lng}/medication.svg`,
      title: t('cardBanner.cards.medication.title'),
      description: t('cardBanner.cards.medication.description'),
      backgroundColor: '#DCFCE7'
    },
    {
      icon: `/${lng}/chat.svg`,
      title: t('cardBanner.cards.guidance.title'),
      description: t('cardBanner.cards.guidance.description'),
      backgroundColor: '#FEF9C3'
    }
  ];
  
  return (
    <section className="feature-cards-section">
      <div className="container">
        <div className="feature-cards-grid">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};