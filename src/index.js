import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureAxios from './app/api/configureAxios';
import { Provider } from 'react-redux'; // Import Redux Provider
import store from './redux/store'; // Import Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));

// Configure Axios globally
configureAxios();

// Wrap App with Provider and pass the store
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Measure app performance
reportWebVitals();
