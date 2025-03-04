import { useTranslation } from '../../../i18n';

export const Footer = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, 'footer');
  return (
      <footer>
        <p> {t('footer.text')} </p>
      </footer>
    );
  }
  