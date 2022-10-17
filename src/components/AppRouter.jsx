import { Route, Routes, Navigate } from "react-router-dom";
import { HOME_ROUTE } from "../utils/consts";
import routes from '../routes'

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

