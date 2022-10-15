import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Context } from "..";
import Home from "../pages/Home";
import routes from '../routes'
import { HOME_ROUTE } from "../utils/consts";
import LoginForm from './LoginForm'


export const AppRouter = (props) => {
  const {user, todo} = useContext(Context)
  const isAuth = false
  return (
  <div>
      <Routes>
        { routes.map(({Component, path}) => {
            return <Route key={path} path={path} element={<Component /> }/>
          })  
        }
        <Route
          path="*"
          element={<Navigate to={HOME_ROUTE} replace />}
        />
      </Routes>
      </div>
  );
}

