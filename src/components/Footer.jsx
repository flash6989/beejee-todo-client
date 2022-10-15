import React, { useContext } from "react";
import { Context } from "..";
import { Link } from "react-router-dom";
import "./styles/footer.scss";

export const Footer = (props) => {
  const {user} = useContext(Context)
  return (
    <div className="footer__container ">
      <div className="container">
        <div className="footer">
          <div className="footer__left">ToDo for BeeJee</div>
          <div div className="footer__right">Powered by Stepanov Andrey</div>
        </div>
      </div>
    </div>
  );
}