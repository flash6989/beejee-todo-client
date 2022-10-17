import './styles/task.scss'
import React, { useContext, useState } from "react";
import { Context } from "..";
import { observer } from 'mobx-react-lite';
import { changeStatusTask, changeTask, fetchTasks } from '../http/taskApi';

export const Task = observer(({todoItem}) => {
  const {user, todo} = useContext(Context)
  const [inputText, setInputText] = useState('')


  const editModeTodoEnable = async () => {
    setInputText(todoItem.text)
    todo.setEditableTask(todoItem)
  }
  const taskCompleteChange = async (status) => {
    const res = await changeStatusTask(todoItem.id, status)
    const {rows, count} = await fetchTasks(undefined, todo.activePage, todo.sort)
    todo.setTodos(rows)
    todo.setCountTodos(count)
    alert(res.message)
  } 
  const saveChangeTodo = async () => {
    if (inputText.length < 5) {
      alert('Текст задачи должен быть больше 5 символов')
      return
    }
    const todoObj = {id: todo.editableTask.id, text: inputText}
    const res = await changeTask(todoObj)
    const {rows, count} = await fetchTasks(undefined, todo.activePage, todo.sort)
    todo.setTodos(rows)
    todo.setCountTodos(count)
    alert(res.message)
    todo.setEditableTask(false)
  }

  return (
    <tr className="task">
        {
          todo.editableTask.id === todoItem.id && user.isAdmin
          ? <td className="task__text"><input type="text" value={inputText} className={todoItem.status ? 'task__text_complete' : null} onChange={(e) => setInputText(e.target.value)} name="" id="" /></td>
          : <td className={todoItem.status ? 'task__text task__text_complete' : 'task__text'}>{
            todoItem.id && user.isAdmin ?
            <input checked={todoItem.status} onChange={(e) => taskCompleteChange(e.target.checked)} type="checkbox" name="" className='task__checkbox' id="" /> :
            null
          } { todoItem.text } {todoItem.whoEdited === 'admin' ? <div className="task__admin-edit">Edited by admin</div> : null}</td>
        }
        <td className="task__name">{ todoItem.userName }</td>
        <td className="task__email">{ todoItem.email }</td>
      {
        user.isAdmin 
        ? todo.editableTask.id === todoItem.id
          ? <td className="task__edit task__edit_active" onClick={() => saveChangeTodo()}>save</td>
          : <td className="task__edit" onClick={() => editModeTodoEnable()}>edit</td>
        : null
      }
      
    </tr> 
  );
})