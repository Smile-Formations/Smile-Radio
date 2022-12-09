// @ts-ignore
import React from 'react';
import { createRoot } from 'react-dom/client';
// @ts-ignore
import App from "./components/App/App.tsx";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);