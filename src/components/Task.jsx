import './styles/task.scss'
import React, { useContext, useState } from "react";
import { Context } from "..";
import { observer } from 'mobx-react-lite';
import { changeTask, fetchTasks } from '../http/taskApi';

export const Task = observer(({todoItem}) => {
  const {user, todo} = useContext(Context)
  const [inputText, setInputText] = useState('')

  const editModeTodoEnable = async () => {
    console.log(inputText, 'asdsa')
    setInputText(todoItem.text)
    todo.setEditableTask(todoItem)
    await fetchTasks()
  }

  const saveChangeTodo = async () => {
    if (inputText.length < 5) {
      alert('Текст задачи должен быть больше 5 символов')
      return
    }
    const todoObj = {id: todo.editableTask.id, text: inputText}
    const res = await changeTask(todoObj)
    todo.editableTask.text = inputText
    alert(res.message)
    todo.setEditableTask(false)

  }

  return (
    <div className="task">
      <div className="task__content">
        {
          todo.editableTask.id === todoItem.id && user.isAdmin
          ? <div className="task__text"><input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} name="" id="" /></div>
          : <div className="task__text">{ todoItem.text }</div>
        }
        <div className="task__name">{ todoItem.userName }</div>
        <div className="task__email">{ todoItem.email }</div>
      </div>
      {
        user.isAdmin 
        ? todo.editableTask.id === todoItem.id
          ? <div className="task__edit task__edit_active" onClick={() => saveChangeTodo()}>save</div>
          : <div className="task__edit" onClick={() => editModeTodoEnable()}>edit</div>
        : null
      }
      
    </div> 
  );
})