// app/impressum/page.tsx
import { useTranslation } from '../../i18n'
import { Navbar } from '../ui/Navbar'


export default async function Page({ params: { lng } }:any ) {
    const { t } = await useTranslation(lng, 'impressum')
    return (
        <>
        <Navbar t={t} lng={lng}/>
        <section id="impressum" className="impressum-section">
            <div className="container">
                <h2 className="text-center">{t('impressum.title')}</h2>

                <p>
                {t('impressum.responsibility')}
                </p>

                <p>
                {t('impressum.address.name')}<br />
                {t('impressum.address.person')}<br />
                {t('impressum.address.street')}<br />
                {t('impressum.address.city')}<br />
                {t('impressum.address.country')}
                </p>

                <h3>{t('impressum.contact.title')}</h3>
                <p>{t('impressum.contact.email')}: <a href="mailto:klaro.carely@gmail.com">klaro.carely@gmail.com</a></p>
            </div>
        </section>
        </>
    )
}
