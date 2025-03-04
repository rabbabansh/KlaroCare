import "../styles/globals.css";
import { dir } from 'i18next'
import { useTranslation } from "../i18n/";
import { languages, fallbackLng } from '../i18n/settings'
import dynamic from 'next/dynamic'

const BootstrapProvider = dynamic(() => import('./components/BootstrapProvider'), {
  ssr: false
});

export async function generateMetadata({ params: { lng } }: any) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)
  return {
    title: "Klaro Care",
    content: t('welcome'),
  }
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <BootstrapProvider>
          {children}
        </BootstrapProvider>
      </body>
    </html>
  );
}
