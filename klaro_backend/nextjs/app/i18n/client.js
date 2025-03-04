'use client'

import i18next from 'i18next'
import { useEffect } from 'react'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, cookieName } from './settings'

const isServerSide = typeof window === 'undefined'

// Initialize i18next on the client
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // Allows language detection to take over on the client
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: isServerSide ? languages : []
  })

export function useTranslation(lng, ns, options) {
  const [cookies, setCookie] = useCookies([cookieName])
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  useEffect(() => {
    // Handle language change if not matching
    if (i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng)
    }
    // Update the cookie if necessary
    if (cookies[cookieName] !== lng) {
      setCookie(cookieName, lng, { path: '/' })
    }
  }, [lng, i18n, cookies, setCookie])

  return ret
}
