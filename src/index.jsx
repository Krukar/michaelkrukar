'use strict';
/* ============
index.jsx
Inject JS/CSS
============ */
// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from 'App.jsx';

// Stylesheets
import './sass/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

console.log('index.jsx init');
