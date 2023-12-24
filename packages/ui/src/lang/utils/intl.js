import { createIntl, createIntlCache } from 'react-intl'
import EN_MESSAGES from '../en.json'
import FR_MESSAGES from '../fr.json'

export const locale = navigator.language
export const language = locale.split(/[-_]/)[0]

const messages = {
    en: EN_MESSAGES,
    fr: FR_MESSAGES
}

const cache = createIntlCache()
export const intl = createIntl({ locale, messages: messages[language] }, cache)
