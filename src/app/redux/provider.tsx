'use client'
import { Provider } from 'react-redux'
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'


interface Props {
    children: React.ReactNode
}
export const Providers = ({children}: Props) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export const ProviderGate = ({children}: Props) => {
    const persistor = persistStore(store)

    return (
        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
    )
}


