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
  }

  const saveChangeTodo = async () => {
    if (inputText.length < 5) {
      alert('Текст задачи должен быть больше 5 символов')
      return
    }
    const todoObj = {id: todo.editableTask.id, text: inputText}
    const res = await changeTask(todoObj)
    const {rows, count} = await fetchTasks(undefined, todo.activePage, todo.sort)
    console.log(rows, count, 'resapi')
    todo.setTodos(rows)
    todo.setCountTodos(count)
    console.log(todo.todos)
    alert(res.message)
    todo.setEditableTask(false)
  }

  return (
    <div className="task">
      <input type="checkbox" name="" className='task__checkbox' id="" />
      <div className="task__content">
        {
          todo.editableTask.id === todoItem.id && user.isAdmin
          ? <div className="task__text"><input type="text" value={inputText} className={todoItem.status ? 'task__text_complete' : null} onChange={(e) => setInputText(e.target.value)} name="" id="" /></div>
          : <div className={todoItem.status ? 'task__text task__text_complete' : 'task__text'}> { todoItem.text } {todoItem.whoEdited === 'admin' ? <div className="task__admin-edit">Edited by admin</div> : null}</div>
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