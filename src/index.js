import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App.js';
import './index.css';
import {Provider} from './context/context'
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render (
    <SpeechProvider appId='c7d75624-e940-4740-9ce6-8dfa30898b90' language='en-US'>
    <Provider>
        <App />
    </Provider>
    </SpeechProvider> ,
    document.getElementById('root')
);