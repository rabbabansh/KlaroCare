import { useTranslation } from '../../../i18n';
import { NavbarBase } from './NavbarBase';

export const Navbar = async ({ lng }:any) => {
    const { t } = await useTranslation(lng, 'navbar');
    return <NavbarBase t={t} lng={lng} />
}
