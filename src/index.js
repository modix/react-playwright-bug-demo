import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('Root element is missing.');
}

const root = createRoot(rootElement);

// Render the App component into the root element
root.render(<App />);
