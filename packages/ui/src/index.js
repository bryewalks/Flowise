import React from 'react'
import App from './App'
import { intl } from './languages/utils/intl'
import { store } from 'store'
import { createRoot } from 'react-dom/client'

// style + assets
import 'assets/scss/style.scss'

// third party
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import ConfirmContextProvider from 'store/context/ConfirmContextProvider'
import { ReactFlowContext } from 'store/context/ReactFlowContext'
import { RawIntlProvider } from 'react-intl'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <RawIntlProvider value={intl}>
            <Provider store={store}>
                <BrowserRouter>
                    <SnackbarProvider>
                        <ConfirmContextProvider>
                            <ReactFlowContext>
                                <App />
                            </ReactFlowContext>
                        </ConfirmContextProvider>
                    </SnackbarProvider>
                </BrowserRouter>
            </Provider>
        </RawIntlProvider>
    </React.StrictMode>
)
