import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useIntl } from 'react-intl'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, ButtonBase, Typography, Stack } from '@mui/material'
import { StyledButton } from 'ui-component/button/StyledButton'

// icons
import { IconCopy, IconChevronLeft } from '@tabler/icons'

// ==============================|| CANVAS HEADER ||============================== //

const MarketplaceCanvasHeader = ({ flowName, flowData, onChatflowCopy }) => {
    const theme = useTheme()
    const navigate = useNavigate()
    const intl = useIntl()

    return (
        <>
            <Box>
                <ButtonBase title={intl.formatMessage({ id: 'back' })} sx={{ borderRadius: '50%' }}>
                    <Avatar
                        variant='rounded'
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        color='inherit'
                        onClick={() => navigate(-1)}
                    >
                        <IconChevronLeft stroke={1.5} size='1.3rem' />
                    </Avatar>
                </ButtonBase>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Stack flexDirection='row'>
                    <Typography
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            ml: 2
                        }}
                    >
                        {flowName}
                    </Typography>
                </Stack>
            </Box>
            <Box>
                <StyledButton
                    color='secondary'
                    variant='contained'
                    title={intl.formatMessage({ id: 'use.chatflow' })}
                    onClick={() => onChatflowCopy(flowData)}
                    startIcon={<IconCopy />}
                >
                    {intl.formatMessage({ id: 'use.template' })}
                </StyledButton>
            </Box>
        </>
    )
}

MarketplaceCanvasHeader.propTypes = {
    flowName: PropTypes.string,
    flowData: PropTypes.object,
    onChatflowCopy: PropTypes.func
}

export default MarketplaceCanvasHeader
