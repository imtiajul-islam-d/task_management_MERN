import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './redux/store/reducers/rootReducer';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}> <App /></Provider>
   <Toaster />
  </React.StrictMode>
);

reportWebVitals();
