import Auth from './pages/Auth'
import Home from './pages/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { AUTHPAGE_ROUTE, REGISTER_ROUTE, LOGIN_ROUTE,HOME_ROUTE } from './utils/consts'

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
