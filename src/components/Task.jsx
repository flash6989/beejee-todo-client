import './styles/task.scss'
import React, { useContext } from "react";
import { Context } from "..";

export const Task = (props) => {
  const {user} = useContext(Context)
  return (
    <div>
      <div className="task">
        <div className="task__content">
          <div className="task__text">Задача номер 1 задазадададад</div>
          <div className="task__name">Виталий</div>
          <div className="task__email">vitaly2034@mail.ru</div>
        </div>
        {
          user.isAdmin ? 
          <div className="task__edit">edit</div> :
          null
        }
      </div>
      {/* <div className="task">
        <div className="task__content">
          <div className="task__text">
            Задача номер 2 задазададададdasdd dasdasdasds sssssssssss
          <div className="task__admin-edit">
            Edited by admin
          </div>
          </div>
          <div className="task__name">Олег</div>
          <div className="task__email">oleg2034@mail.ru</div>
          
        </div>
        {
          user.isAdmin ? 
          <div className="task__edit">edit</div>:
          null
        }
      </div>
      <div className="task">
        <div className="task__content">
          <div className="task__text"><input type="text" name="" id="" /></div>
          <div className="task__name">Виталий</div>
          <div className="task__email">vitaly2034@mail.ru</div></div>
        <div className="task__edit task__edit_active">save</div>
      </div> */}
    </div>
  );
}