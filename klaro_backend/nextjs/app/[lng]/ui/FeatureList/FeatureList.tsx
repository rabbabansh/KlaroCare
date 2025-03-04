import Image from 'next/image';
import { useTranslation } from '../../../i18n';

export const FeatureList = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, 'featureList');

  const features = [
    {
      icon: `/${lng}/balance.svg`,
      text: t('featureList.items.workLife.text'),
      color: '#00BFB3'
    },
    {
      icon: `/${lng}/organized.svg`,
      text: t('featureList.items.organized.text'),
      color: '#00BFB3'
    },
    {
      icon: `/${lng}/confident.svg`,
      text: t('featureList.items.confident.text'),
      color: '#00BFB3'
    },
    {
      icon: `/${lng}/knowledge.svg`,
      text: t('featureList.items.knowledge.text'),
      color: '#00BFB3'
    }
  ];

  return (
    <section className="feature-list-section">
      <div className="container">
        <div className="feature-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div 
                className="feature-icon"
                style={{ backgroundColor: feature.color }}
              >
                <Image
                  src={feature.icon}
                  alt=""
                  className="icon"
                  width={20}
                  height={20}
                />
              </div>
              <span className="feature-text">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 