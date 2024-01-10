import React from 'react';
import ReactDOM from 'react-dom/client';
import './axios';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { ProSidebarProvider } from 'react-pro-sidebar';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById('root'));
const persister = persistStore(store);

root.render(
    <Provider store={store}>
        <ProSidebarProvider>
          <PersistGate persistor={persister}>
           <App />
          </PersistGate>
        </ProSidebarProvider>
    </Provider>
);
