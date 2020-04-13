import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'fomantic-ui-css/semantic.min.css';
import { ContactContextProvider } from './context/contact-context';

ReactDOM.render(
  // wraopping app in ContactContextProvider to utilize code from contact-context.js. 
  <ContactContextProvider>
    {/* wrappiung app in BrowserRouter for routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContactContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
