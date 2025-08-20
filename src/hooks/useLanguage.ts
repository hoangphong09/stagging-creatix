import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { APP_CONFIG } from '@/constants';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage<string>(
    'creatix-language',
    APP_CONFIG.languages.default
  );
  const [isLoadingLanguage, setIsLoadingLanguage] = useState(false);

  const changeLanguage = useCallback(async (lang: 'en' | 'vi') => {
    if (!APP_CONFIG.languages.supported.includes(lang)) {
      console.warn(`Unsupported language: ${lang}`);
      return;
    }

    setIsLoadingLanguage(true);
    setCurrentLanguage(lang);

    try {
      const googleTranslateCookieName = 'googtrans';
      
      if (lang === 'vi') {
        const cookieValue = '/en/vi';
        document.cookie = `${googleTranslateCookieName}=${cookieValue};path=/;domain=${window.location.hostname}`;
        document.cookie = `${googleTranslateCookieName}=${cookieValue};path=/;`;
      } else if (lang === 'en') {
        document.cookie = `${googleTranslateCookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${window.location.hostname}`;
        document.cookie = `${googleTranslateCookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
      } else {
        const cookieValue = `/en/${lang}`;
        document.cookie = `${googleTranslateCookieName}=${cookieValue};path=/;domain=${window.location.hostname}`;
        document.cookie = `${googleTranslateCookieName}=${cookieValue};path=/;`;
      }

      // Reload page to apply translation
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      console.error('Error changing language:', error);
      setIsLoadingLanguage(false);
    }
  }, [setCurrentLanguage]);

  // Initialize Google Translate
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById('google-translate-script')) return;

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          { 
            pageLanguage: 'en',
            includedLanguages: 'en,vi'
          },
          'google_translate_element'
        );
      } catch (error) {
        console.error('Error initializing Google Translate:', error);
      }
    };

    addGoogleTranslateScript();
  }, []);

  // Restore language from cookie on mount
  useEffect(() => {
    const cookies = document.cookie.split(';');
    const googtransCookie = cookies.find(cookie => cookie.trim().startsWith('googtrans='));
    
    if (googtransCookie) {
      const currentLang = googtransCookie.split('=')[1];
      
      if (currentLang.includes('/vi')) {
        setCurrentLanguage('vi');
      } else if (currentLang.includes('/en')) {
        setCurrentLanguage('en');
      } else {
        const langMatch = currentLang.match(/\/([a-z]{2})$/);
        if (langMatch && APP_CONFIG.languages.supported.includes(langMatch[1] as 'en' | 'vi')) {
          setCurrentLanguage(langMatch[1] as 'en' | 'vi');
        }
      }
    }
  }, [setCurrentLanguage]);

  return {
    currentLanguage,
    isLoadingLanguage,
    changeLanguage,
    supportedLanguages: APP_CONFIG.languages.supported,
  };
}

// Extend Window interface for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}
