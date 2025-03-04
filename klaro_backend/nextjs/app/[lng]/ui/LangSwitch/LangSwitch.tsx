"use client"

import { useRouter, usePathname } from 'next/navigation';
import { cookieName } from '../../../i18n/settings';

interface LanguageSwitcherProps {
    currentLang: string;
    languages: string[];
}

const languageNames: { [key: string]: string } = {
    en: 'English',
    de: 'Deutsch'
};

const LanguageSwitcher = ({ currentLang, languages }: LanguageSwitcherProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const availableLanguages = languages.filter(lang => lang !== currentLang);

    const handleLanguageChange = (lang: string) => {
        document.cookie = `${cookieName}=${lang}; path=/; SameSite=Lax; ${
            process.env.NODE_ENV === 'production' ? 'Secure;' : ''
        }`;
        const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
        router.push(newPath);
    };

    return (
        <div className="navbar-lang-switch">
            {availableLanguages.map((lang) => (
                <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="lang-switch-button"
                >
                    {languageNames[lang]}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
