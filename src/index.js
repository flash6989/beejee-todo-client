import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoStore from './store/TodoStore';
import UserStore from './store/UserStore';


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Context.Provider value={{
    user: new UserStore(),
    todo: new TodoStore()
  }}>
    <App />
  </Context.Provider>

  </React.StrictMode>
);