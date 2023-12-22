import { createIntl, createIntlCache } from 'react-intl'
import EN_MESSAGES from '../en.json'

const locale = navigator.language
const language = locale.split(/[-_]/)[0]
const supportedMessages = {
    en: EN_MESSAGES
}
// If users current language is not supported default to english
const messages = supportedMessages[language] ? supportedMessages[language] : supportedMessages['en']

const cache = createIntlCache()
export const intl = createIntl({ locale, messages }, cache)
