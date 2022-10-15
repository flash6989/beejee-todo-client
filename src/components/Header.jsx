import React, { useContext } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
import "./styles/header.scss";
import { observer } from "mobx-react-lite";

export const Header = observer( (props) => {
  const {user} = useContext(Context)
  return (
    <div className="header__container ">
      <div className="container">
        <div className="header">
          <div className="header__logo"> <Link to="/">Logo</Link></div>
          <div div className="header__menu-links">
            <ul>
              {user.isAuth ?
                <li>Выйти</li>
                :
                <li><Link to="/auth" onClick={() => user.setIsAuth(true)}>Войти</Link></li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
})