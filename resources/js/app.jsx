import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';


import React from 'react';
import ReactDOM from 'react-dom/client';


const appElement = document.getElementById('app');


if (appElement) {
    ReactDOM.createRoot(appElement).render(
        <React.StrictMode>
            <h1>hola</h1>
        </React.StrictMode>
    );
}

