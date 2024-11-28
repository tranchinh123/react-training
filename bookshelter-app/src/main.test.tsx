import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

describe('Index', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('renders App component', () => {
    createRoot(container).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    expect(container.firstChild).toBeTruthy();
  });
});
