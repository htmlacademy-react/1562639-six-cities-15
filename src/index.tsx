import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './constants/const';
import { CARDS_MOCK } from './mock/cards-mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      resultCount={Setting.ResultCount}
      cards={CARDS_MOCK}
    />
  </React.StrictMode>
);
