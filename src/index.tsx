
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import Theme from './global.style';
import { Provider } from 'react-redux';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Theme>
      <Provider store={store}>
        <Routes>

        <Route path="/*" element={<App />} />

        </Routes>
      </Provider>
    </Theme>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
