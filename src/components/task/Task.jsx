import '../styles/task.scss'
import React, { useContext, useState } from "react";
import { Context } from "../..";
import { observer } from 'mobx-react-lite';
import { changeStatusTask, changeTask, fetchTasks } from '../../http/taskApi';

export const Task = observer(({taskItem}) => {
  const {user, task} = useContext(Context)
  const [inputText, setInputText] = useState('')

  const fetchTasksAndSave = async () => {
    const {rows, count} = await fetchTasks(undefined, task.activePage, task.sort)
    task.setTasks(rows)
    task.setCountTasks(count)
  }

  const editModeTodoEnable = async () => {
    setInputText(taskItem.text)
    task.setEditableTask(taskItem)
  }
  const taskCompleteChange = async (status) => {
    const res = await changeStatusTask(taskItem.id, status)
    fetchTasksAndSave()
    alert(res.message)
  } 
  const saveChangeTodo = async () => {
    if (inputText.length < 5) {
      alert('Текст задачи должен быть больше 5 символов')
      return
    }
    const taskObj = {id: task.editableTask.id, text: inputText}
    const res = await changeTask(taskObj)
    fetchTasksAndSave()
    alert(res.message)
    task.setEditableTask(false)
  }

  return (
    <tr className="task">
        {
          task.editableTask.id === taskItem.id && user.isAdmin
          ? <td className="task__text"><input type="text" value={inputText} className={taskItem.status ? 'task__text_complete' : null} onChange={(e) => setInputText(e.target.value)} name="" id="" /></td>
          : <td className={taskItem.status ? 'task__text task__text_complete' : 'task__text'}>{
            taskItem.id && user.isAdmin ?
            <input checked={taskItem.status} onChange={(e) => taskCompleteChange(e.target.checked)} type="checkbox" name="" className='task__checkbox' id="" /> :
            null
          } { taskItem.text } {taskItem.whoEdited === 'admin' ? <div className="task__admin-edit">Edited by admin</div> : null}</td>
        }
        <td className="task__name">{ taskItem.userName }</td>
        <td className="task__email">{ taskItem.email }</td>
      {
        user.isAdmin 
        ? task.editableTask.id === taskItem.id
          ? <td className="task__edit task__edit_active" onClick={() => saveChangeTodo()}>save</td>
          : <td className="task__edit" onClick={() => editModeTodoEnable()}>edit</td>
        : null
      }
      
    </tr> 
  );
})