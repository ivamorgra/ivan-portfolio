import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Language } from './translations'
type Translation = typeof translations[Language]

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage === 'en' || savedLanguage === 'es') {
      return savedLanguage
    }

    return 'en'
  })

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}