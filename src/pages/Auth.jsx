import React from "react";
import LoginForm from '../components/LoginForm'
import '../components/styles/auth.scss'
 const Auth = (props) => {
  return (
      <div className="auth">
        <LoginForm />
      </div>
  );
}

export default Auth