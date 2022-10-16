import React, { useContext } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
import "./styles/header.scss";
import { observer } from "mobx-react-lite";
import { AUTHPAGE_ROUTE, HOME_ROUTE } from "../utils/consts";

export const Header = observer( (props) => {
  const {user} = useContext(Context)
  const logout = () => {
    user.setIsUser(null)
    user.setIsAuth(null)
    user.setIsAdmin(null)
    localStorage.removeItem('token')
    alert('Вы успешно вышли из системы')
  }
  return (
    <div className="header__container ">
      <div className="container">
        <div className="header">
          <div className="header__logo"> <Link to={HOME_ROUTE}>Logo</Link></div>
          <div div className="header__menu-links">
            <ul>
              {user.isAuth ?
                <li onClick={() => logout()}>Выйти</li>
                :
                <li><Link to={AUTHPAGE_ROUTE}>Войти</Link></li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
})