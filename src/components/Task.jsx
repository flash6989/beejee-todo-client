import './styles/task.scss'
import React, { useContext, useState } from "react";
import { Context } from "..";
import { observer } from 'mobx-react-lite';

export const Task = observer(({todoItem}) => {
  const {user, todo} = useContext(Context)
  const [inputText, setInputText] = useState(false)
  return (
    <div className="task">
      <div className="task__content">
        {
          todo.editableTask.id === todoItem.id && user.isAdmin
          ? <div className="task__text"><input type="text" name="" id="" /></div>
          : <div className="task__text">{ todoItem.text }</div>
        }
        <div className="task__name">{ todoItem.userName }</div>
        <div className="task__email">{ todoItem.email }</div>
      </div>
      {
        user.isAdmin 
        ? todo.editableTask.id === todoItem.id
          ? <div className="task__edit task__edit_active" onClick={() => todo.setEditableTask(false)}>save</div>
          : <div className="task__edit" onClick={() => todo.setEditableTask(todoItem)}>edit</div>
        : null
      }
      
    </div> 
  );
})