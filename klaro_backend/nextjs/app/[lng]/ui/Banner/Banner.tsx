import Image from 'next/image';
import { useTranslation } from '../../../i18n';

export const Banner = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, 'banner');
  return (
    <section className="banner-section">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="banner-content">
          <h1 className="display-4">{t('banner.title')}</h1>
          <p className="lead">{t('banner.description')}</p>
          <a href="#contact" className="btn btn-primary">
            {t('banner.ctaButton')}
          </a>
        </div>
        <div className="banner-illustration">
          <Image 
            src={`/${lng}/carebanner.svg`}
            alt="Care illustration"
            className="img-fluid"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};