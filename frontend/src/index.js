import React from 'react';
import ReactDOM from 'react-dom/client';
import './axios';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { ProSidebarProvider } from 'react-pro-sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
    </Provider>
);
