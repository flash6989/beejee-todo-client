import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from '../routes'
import { HOME_ROUTE } from "../utils/consts";

export const AppRouter = (props) => {
  return (
  <div>
      <Routes>
      { routes.map(({Component, path}) => {
            return <Route key={path} path={path} element={<Component /> }/>
          })  
        }
        <Route
          path="*"
          element={<Navigate to={HOME_ROUTE} />}
        />
      </Routes>
      </div>
  );
}

