import { useTranslation } from '../../../i18n';

export const About = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, 'about');
  return  (
    <section id="about" className="about py-5">
      <div className="container">
        <h2 className="text-center">{t('about.title')}</h2>
        <p className="text-center">
          {t('about.descriptionpart1')} <span className="highlight">{t('about.highlight')}</span> {t('about.descriptionpart2')}
        </p>
      </div>
    </section>
  );
};
