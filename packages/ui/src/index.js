import React from 'react'
import App from './App'
import messages from './languages'
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
import { IntlProvider } from 'react-intl'

const container = document.getElementById('root')
const root = createRoot(container)
const locale = navigator.language
const language = locale.split(/[-_]/)[0]

root.render(
    <React.StrictMode>
        <IntlProvider locale={locale} messages={messages[language]}>
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
        </IntlProvider>
    </React.StrictMode>
)
