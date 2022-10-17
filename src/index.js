import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TaskStore from './store/TaskStore';
import UserStore from './store/UserStore';


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Context.Provider value={{
    user: new UserStore(),
    task: new TaskStore()
  }}>
    <App />
  </Context.Provider>

  </React.StrictMode>
);