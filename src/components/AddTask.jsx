import React from "react";
import './styles/addTask.scss'
export const AddTask = (props) => {
  return (
    <div className="container">
      <div className="add-task">
        <form action="task-form">
          <input type="text" name="todo-text" id="todo-text" placeholder="Введите текст задачи"/>
          <input type="text" name="user-name" id="user-name" placeholder="Введите имя пользователя"/>
          <input type="email" name="user-email" id="user-email" placeholder="Введите емайл пользователя"/>
          <div className="add-task__bottom">
            <button type="submit" className="add-task__button">Добавить задачу</button>
          </div>
        </form>
      </div>
    </div>
  );
}
