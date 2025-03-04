import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export function middleware(req) {
  let lng = req.cookies.get(cookieName)?.value || acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng || !languages.includes(lng)) lng = fallbackLng;

  // Redirect if language path is missing
  if (!languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }

  // Update cookie if referer contains language
  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'));
    const lngInReferer = languages.find(l => refererUrl.pathname.startsWith(`/${l}`));
    if (lngInReferer) {
      const response = NextResponse.next();
      response.cookies.set(cookieName, lngInReferer, { sameSite: 'Lax', secure: process.env.NODE_ENV === 'production' });
      return response;
    }
  }

  return NextResponse.next();
}