import  ContactForm from './ui/ContactForm/ContactForm';
import { Navbar } from './ui/Navbar';
import { Footer } from './ui/Footer/footer';
//import MySpline from './ui/MySpline';
import { languages, fallbackLng } from '../i18n/settings'
import { Banner } from './ui/Banner/Banner';
import { CardBanner } from './ui/CardBanner/CardBanner';
import { FeatureList } from './ui/FeatureList/FeatureList';
import { AskKlaro } from './ui/AskKlaro/AskKlaro';
import { Partners } from './ui/Partners/Partners';

export default async function Page({ params: { lng } }: any) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  return (
    <>
      <Navbar lng={lng}/>
      <Banner lng={lng}/>
      {/* <Hero lng={lng}/> */}
      <CardBanner lng={lng}/>
      <FeatureList lng={lng}/>
      <AskKlaro lng={lng}/>
      <Partners lng={lng}/>
      {/* <About lng={lng}/>
      <Problem lng={lng}/> */}
      <ContactForm lng={lng}/>
      <Footer lng={lng}/>
    </>
  );
}
