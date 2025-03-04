// app/datenschutz/page.tsx
import { useTranslation } from '../../i18n';
import { Navbar } from '../ui/Navbar'

export default async function Datenschutz({ params: { lng } }: any) {
    const { t } = await useTranslation(lng, 'datenschutz');

    return (
        <>
        <Navbar t={t} lng={lng}/>
        <section id="datenschutz" className="datenschutz-section">
            <div className="container">
                <h2 className="text-center">{t('datenschutz.title')}</h2>

                <p>{t('datenschutz.introduction')}</p>
                <p>{t('datenschutz.dataProcessing')}</p>
                <h2>{t('datenschutz.generalData.title')}</h2>
                <p>{t('datenschutz.generalData.content')}</p>
                <h2>{t('datenschutz.contact.title')}</h2>
                <p>{t('datenschutz.contact.content')}</p>
                <h2>{t('datenschutz.dataRetention.title')}</h2>
                <p>{t('datenschutz.dataRetention.content')}</p>
                <h2>{t('datenschutz.rights.title')}</h2>
                <ul>
                    <li>{t('datenschutz.rights.confirmation')}</li>
                    <li>{t('datenschutz.rights.information')}</li>
                    <li>{t('datenschutz.rights.correction')}</li>
                    <li>{t('datenschutz.rights.deletion')}</li>
                    <li>{t('datenschutz.rights.restriction')}</li>
                    <li>{t('datenschutz.rights.dataTransfer')}</li>
                    <li>{t('datenschutz.rights.objection')}</li>
                    <li>{t('datenschutz.rights.withdrawal')}</li>
                </ul>
            </div>
        </section>
        </>
    );
}
