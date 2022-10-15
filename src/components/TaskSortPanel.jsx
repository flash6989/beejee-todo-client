import arrow from '../assets/arrow.svg';
import React, { useContext } from "react";
import { Context } from "..";

import './styles/taskSortPanel.scss'
import { observer } from 'mobx-react-lite';

export const TaskSortPanel = observer((props) => {
  const {user} = useContext(Context)

    return (
      <div className="container">
        <div className="task__filter-by">
        <div className="task__filter-by-text"><p>Текст задачи</p><img className="task__img" src={arrow}/></div>
        <div className="task__filter-by-name"><p>Имя пользователя</p><img className="task__img" src={arrow}/></div>
        <div className="task__filter-by-email"><p>Емайл пользователя</p><img className="task__img" src={arrow}/></div>
        {
          user.isAdmin ? 
          <div className="task__filter-by-empty"></div> :
          null
        }
      </div>
      </div>
    );
})