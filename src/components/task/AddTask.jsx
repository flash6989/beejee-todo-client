import React, { useContext, useState } from "react";
import { Context } from "../..";
import '../styles/addTask.scss'
import { addTask, fetchTasks } from "../../http/taskApi";
import { observer } from "mobx-react-lite";

export const AddTask = observer((props) => {
  const {task} = useContext(Context)

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [taskText, setTaskText] = useState('')
  
  const addTaskHandler = async (e) => {
    const isValidate = validateFields()
    if (!isValidate) return
    const res = await addTask({userName, email, text: taskText})
    if(res) {
      fetchTasks(undefined, task.activePage, task.sort).then(data => {
        task.setTasks(data.rows)
        task.setCountTasks(data.count)
        alert('Задача успешно добавлена!')
      }).catch()
    }
    setUserName('')
    setEmail('')
    setTaskText('')
  }
  
  const validateFields = () => {
    if (userName < 3 || !userName) {
      alert('Поле имени не можеть быть пустым или менее 3 знаков')
      return false
    }
    if (taskText < 5 || !taskText) {
      alert('Поле имени не можеть быть пустым или менее 5 знаков')
      return false
    }
    if (!email) {
      alert('Поле емайл обязательно для заполнения')
      return false
    }
    if (!email.includes('@') || !email.includes('.')) {
      alert('Введен некорректный емайл')
      return false
    }
    return true
  }

  return (
    <div className="container">
      <div className="add-task">
        <form id="task-form" action="" onSubmit={(e) => e.preventDefault()}>
          <input maxLength="200" value={taskText} onChange={e => {setTaskText(e.target.value)}} type="text" name="todo-text" id="todo-text" placeholder="Введите текст задачи"/>
          <input maxLength="30" value={userName} onChange={e => {setUserName(e.target.value)}} type="text" name="user-name" id="user-name" placeholder="Введите имя пользователя"/>
          <input maxLength="30" value={email} onChange={e => {setEmail(e.target.value)}} type="email" name="user-email" id="user-email" placeholder="Введите емайл пользователя"/>
          <div className="add-task__bottom">
            <button type="submit" className="add-task__button" onClick={() => addTaskHandler()}>Добавить задачу</button>
          </div>
        </form>
      </div>
    </div>
  );
})
