import { Link } from "react-router-dom";
import React from "react";
import '../components/styles/loginForm.scss'

const AuthForm = (props) => {
  return (
      <div className="login">
        <div className="login__header">
          <h2>Авторизация</h2>
        </div>
        
        <form action="auth" className="login__form">
          <div className="login__name">
            <p p>Логин</p>
            <input type="text" name="" id="" placeholder="Введите логин"/>
          </div>
          <div className="login__password">
            <p>Пароль</p>
            <input type="password" name="" id="" placeholder="Введите пароль"/>
          </div>
          <input className="login__button" type="button" value="Авторизоваться" />
        </form>
        <div className="button__back-to-list">
          <Link to="/">Вернуться к списку задач</Link>
        </div>
      </div>
  );
}

export default AuthForm