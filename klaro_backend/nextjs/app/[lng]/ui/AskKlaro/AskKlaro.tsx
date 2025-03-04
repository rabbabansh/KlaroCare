import { useTranslation } from '../../../i18n';

export const AskKlaro = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, 'askKlaro');
  
  return (
    <section className="ask-klaro-section">
      <div className="container">
        <div className="ask-klaro-content">
          <div className="ask-klaro-text">
            <h2>{t('askKlaro.title')}</h2>
            <h3>{t('askKlaro.subtitle')}</h3>
          </div>
          <div className="phone-container">
            <div className="phone-frame">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 