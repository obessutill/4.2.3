import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import './index.css'
import '@mantine/core/styles.css';
import App from './App.tsx'
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </MantineProvider>
    </Provider>
  </StrictMode>,
)
