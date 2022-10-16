
import { Link, useNavigate  } from "react-router-dom";
import React, { useContext, useState } from "react";
import '../components/styles/loginForm.scss'
import { login } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { HOME_ROUTE } from "../utils/consts";

const AuthForm = observer((props) => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const signIn = async (e) => {
    try {
      const isValid = validateAuthData(userlLogin, password)
      if (!isValid) return
      const response = await login(userlLogin, password)
      if (!response) return
      user.setIsUser(response)
      user.setIsAuth(true)
      user.setIsAdmin(true)
      navigate('/')
    } catch(e) {
      alert(e.response.data.message)
    }
    
  }

  const validateAuthData = (userLogin, userPassword) => {
    if(userLogin.length < 3) {
      alert('Логин не может быть меньше 3 знаков')
      return false
    }
    if (userPassword.length < 5 ) {
      alert('Пароль не может быть меньше 5 знаков')
      return false
    }
    return true
  }

  const [ userlLogin, setUserLogin] = useState('')
  const [ password, setPassword] = useState('')

  return (
      <div className="login">
        <div className="login__header">
          <h2>Авторизация</h2>
        </div>
        
        <form action="auth" className="login__form">
          <div className="login__name">
            <p p>Логин</p>
            <input type="text" value={userlLogin} onChange={e => {setUserLogin(e.target.value)}} name="" id="login" placeholder="Введите логин"/>
          </div>
          <div className="login__password">
            <p>Пароль</p>
            <input type="password" value={password} onChange={e => {setPassword(e.target.value)}} name="" id="password" placeholder="Введите пароль"/>
          </div>
          <input className="login__button" type="button" onClick={signIn} value="Авторизоваться" />
        </form>
        <div className="button__back-to-list">
          <Link to={HOME_ROUTE}>Вернуться к списку задач</Link>
        </div>
      </div>
  );
})

export default AuthForm