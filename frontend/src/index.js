import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from './App';
import './axios';
import './index.css';
import { store } from './state/store';

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
