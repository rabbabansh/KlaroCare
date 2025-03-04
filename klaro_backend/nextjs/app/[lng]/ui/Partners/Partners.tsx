import { useTranslation } from '../../../i18n';
import { PartnerCard } from './PartnerCard';

export const Partners = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, 'partners');

  const partners = [
    {
      title: t('partners.cards.insurance.title'),
      description: t('partners.cards.insurance.description')
    },
    {
      title: t('partners.cards.healthcare.title'),
      description: t('partners.cards.healthcare.description')
    },
    {
      title: t('partners.cards.employers.title'),
      description: t('partners.cards.employers.description')
    },
    {
      title: t('partners.cards.welfare.title'),
      description: t('partners.cards.welfare.description')
    }
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <h2 className="partners-title">{t('partners.title')}</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <PartnerCard 
              key={index}
              title={partner.title}
              description={partner.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 