import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './hairstyleai/App.tsx';
import './hairstyleai/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
