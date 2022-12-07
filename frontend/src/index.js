import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { VisionUIControllerProvider } from "./context";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <VisionUIControllerProvider>
        <App />
      </VisionUIControllerProvider>
    </Provider>

);


