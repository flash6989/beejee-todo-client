import React, { useContext } from "react";
import './styles/taskList.scss'
import { Task } from './Task'
import { Context } from "..";
import { observer } from "mobx-react-lite";

export const TaskList = observer((props) => {
  const {todo, user} = useContext(Context)

  return (
    <div className="container">
      <div className="task-list">
        {
          todo.todos.map(todo => {
            return <Task 
              key={todo.id} 
              todoItem={todo}
            />
          })
        }
      </div>
    </div>
  );
})