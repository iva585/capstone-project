import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#app')
);
