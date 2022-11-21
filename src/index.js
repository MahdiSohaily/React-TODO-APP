import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { fetchTodos } from './redux/todos/todoSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchTodos);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
