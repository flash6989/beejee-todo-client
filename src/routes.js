import Auth from './pages/Auth'
import Home from './pages/Home'

import { AUTHPAGE_ROUTE, HOME_ROUTE } from './utils/consts'

const routes = [
  {
    path: AUTHPAGE_ROUTE,
    Component: Auth,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  }
]
export default routes
