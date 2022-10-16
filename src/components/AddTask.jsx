import React, { useContext, useState } from "react";
import './styles/addTask.scss'
import { addTask, fetchTasks } from "../http/taskApi";
import { observer } from "mobx-react-lite";
import { Context } from "..";

export const AddTask = observer((props) => {
  const {todo} = useContext(Context)

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [taskText, setTaskText] = useState('')
  
  const addTaskHandler = async (e) => {
    const isValidate = validateFields()
    if (!isValidate) return
    const res = await addTask({userName, email, text: taskText})
    if(res) {
      fetchTasks(undefined, todo.activePage, todo.limit).then(data => {
        todo.setTodos(data.rows)
        todo.setCountTodos(data.count)
        alert('Задача успешно добавлена!')
      }).catch()
    }
    setUserName('')
    setEmail('')
    setTaskText('')
    console.log(res)
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
          <input value={taskText} onChange={e => {setTaskText(e.target.value)}} type="text" name="todo-text" id="todo-text" placeholder="Введите текст задачи"/>
          <input value={userName} onChange={e => {setUserName(e.target.value)}} type="text" name="user-name" id="user-name" placeholder="Введите имя пользователя"/>
          <input value={email} onChange={e => {setEmail(e.target.value)}} type="email" name="user-email" id="user-email" placeholder="Введите емайл пользователя"/>
          <div className="add-task__bottom">
            <button type="submit" className="add-task__button" onClick={() => addTaskHandler()}>Добавить задачу</button>
          </div>
        </form>
      </div>
    </div>
  );
})
