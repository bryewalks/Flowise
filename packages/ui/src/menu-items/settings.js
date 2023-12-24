// assets
import { IconTrash, IconFileUpload, IconFileExport, IconCopy, IconSearch, IconMessage, IconPictureInPictureOff } from '@tabler/icons'
import { intl } from 'lang/utils/intl'

// constant
const icons = { IconTrash, IconFileUpload, IconFileExport, IconCopy, IconSearch, IconMessage, IconPictureInPictureOff }

// ==============================|| SETTINGS MENU ITEMS ||============================== //

const settings = {
    id: 'settings',
    title: '',
    type: 'group',
    children: [
        {
            id: 'conversationStarters',
            title: intl.formatMessage({ id: 'settings.starter.prompts', defaultMessage: 'Starter Prompts' }),
            type: 'item',
            url: '',
            icon: icons.IconPictureInPictureOff
        },
        {
            id: 'viewMessages',
            title: intl.formatMessage({ id: 'settings.view.messages', defaultMessage: 'View Messages' }),
            type: 'item',
            url: '',
            icon: icons.IconMessage
        },
        {
            id: 'duplicateChatflow',
            title: intl.formatMessage({ id: 'settings.duplicate.chatflow', defaultMessage: 'Duplicate Chatflow' }),
            type: 'item',
            url: '',
            icon: icons.IconCopy
        },
        {
            id: 'loadChatflow',
            title: intl.formatMessage({ id: 'settings.load.chatflow', defaultMessage: 'Load Chatflow' }),
            type: 'item',
            url: '',
            icon: icons.IconFileUpload
        },
        {
            id: 'exportChatflow',
            title: intl.formatMessage({ id: 'settings.export.chatflow', defaultMessage: 'Export Chatflow' }),
            type: 'item',
            url: '',
            icon: icons.IconFileExport
        },
        {
            id: 'analyseChatflow',
            title: intl.formatMessage({ id: 'settings.analyse.chatflow', defaultMessage: 'Analyse Chatflow' }),
            type: 'item',
            url: '',
            icon: icons.IconSearch
        },
        {
            id: 'deleteChatflow',
            title: intl.formatMessage({ id: 'settings.delete.chatflow', defaultMessage: 'Delete Chatflow' }),
            type: 'item',
            url: '',
            icon: icons.IconTrash
        }
    ]
}

export default settings
