import Link from 'next/link';
import { languages } from '../../../i18n/settings';
import LangSwitch from '../LangSwitch/LangSwitch';
import Image from 'next/image';



export const NavbarBase = ({ t, lng }: any) => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg">
            <div className="container">
                <Link href={`/${lng}`} className="navbar-brand d-flex align-items-center">
                    <Image
                        src={`/${lng}/favicon-32x32.png`}
                        alt="Klaro Care"
                        width="32"
                        height="32"
                        className="me-2"
                    />
                </Link>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link href={`/${lng}/impressum`} className="nav-link">{t('navbar.impressum')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link href={`/${lng}/datenschutz`} className="nav-link">{t('navbar.datenschutz')}</Link>
                        </li>
                    </ul>
                    <LangSwitch currentLang={lng} languages={languages} />
                </div>
            </div>
        </nav>
    )
}


//<li className="nav-item">
//                            <Link href=".#problem" className="nav-link">{t('navbar.problem')}</Link>
//                        </li>
//                        <li className="nav-item">
//                            <Link href=".#contact" className="nav-link">{t('navbar.contact')}</Link>
//                        </li>
