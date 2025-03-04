import { useTranslation } from '../../../i18n';

export const Hero = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, 'hero');
  return (
      <section id="hero" className="hero">
        <div className="container">
          <h1 className="display-4">{t('hero.title')}</h1>
          <p className="lead">{t('hero.description')}</p>
          <a href="#contact" className="btn btn-primary cta-button">{t('hero.ctaButton')}</a>
        </div>
      </section>
    );
  }
  