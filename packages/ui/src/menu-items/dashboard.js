// assets
import { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot } from '@tabler/icons'
import { intl } from 'languages/utils/intl'

// constant
const icons = { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'chatflows',
            title: intl.formatMessage({ id: 'chatflows.dashboard' }),
            type: 'item',
            url: '/chatflows',
            icon: icons.IconHierarchy,
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: intl.formatMessage({ id: 'marketplaces.dashboard' }),
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'tools',
            title: intl.formatMessage({ id: 'tools.dashboard' }),
            type: 'item',
            url: '/tools',
            icon: icons.IconTool,
            breadcrumbs: true
        },
        {
            id: 'assistants',
            title: intl.formatMessage({ id: 'assistants.dashboard' }),
            type: 'item',
            url: '/assistants',
            icon: icons.IconRobot,
            breadcrumbs: true
        },
        {
            id: 'credentials',
            title: intl.formatMessage({ id: 'credentials.dashboard' }),
            type: 'item',
            url: '/credentials',
            icon: icons.IconLock,
            breadcrumbs: true
        },
        {
            id: 'apikey',
            title: intl.formatMessage({ id: 'apikeys.dashboard' }),
            type: 'item',
            url: '/apikey',
            icon: icons.IconKey,
            breadcrumbs: true
        }
    ]
}

export default dashboard
