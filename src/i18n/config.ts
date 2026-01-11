// i18n Configuration for Devil Hunter Wiki

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const languages = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    dir: 'ltr',
  },
  zh: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '简体中文',
    flag: '🇨🇳',
    dir: 'ltr',
  },
} as const

// Helper function to get language metadata
export function getLanguage(locale: Locale) {
  return languages[locale] || languages.en
}

// Helper function to check if locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale)
}
