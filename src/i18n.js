import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import languageEN from './locate/en/translate.json'
import languageJP from './locate/jp/translate.json'

i18n
.use(XHR)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: languageEN,
        jp: languageJP
    },
    /* default language when load the website in browser */
    lng: "en",
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: "en",

    /* debugger For Development environment */

    /*
    *   If set to TRUE, the i18next.js console.logs a message with the language it's using each time a page renders.
    *   I am Shamin Asfaq, and I have turned the debugging to FALSE, because the console.log messages are bugging me.
    *   Feel free to turn this back to TRUE if you need it.
    *   Thank you for your understanding.
    *
    *   P.S. Please, re-turn this back to FALSE when you are pushing your code to Git repo.
    *
    * */
    debug: false,

    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    }
});

export default i18n;