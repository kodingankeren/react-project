import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Home from './container/Home/Home';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <Home />
  </div>
);
