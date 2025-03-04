'use client';

import { useTranslation } from '../../../i18n/client';
import { NavbarBase } from './NavbarBase';

export const Navbar = ({ lng }:any) => {
    const { t } = useTranslation(lng, 'navbar');
    return <NavbarBase t={t} lng={lng} />;
};
