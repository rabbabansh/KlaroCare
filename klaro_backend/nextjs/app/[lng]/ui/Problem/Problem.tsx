import { useTranslation } from '../../../i18n';

export const Problem = async ({ lng }: any) => {
  const { t } = await useTranslation(lng, 'problem');
  return (
      <section id="problem" className="problem-section">
        <div className="container text-center">
          <h2>Problem</h2>
          <p>
            {t('problem.statement')}
            <span className="highlight">{t('problem.support')}</span> {t('problem.homecarepart1')}
            <span className="highlight">{t('problem.homecare')}</span> {t('problem.homecarepart2')}
          </p>
        </div>
      </section>
    );
  }
  