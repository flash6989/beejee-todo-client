import React, { useContext, useEffect } from "react";
import './styles/taskList.scss'
import { Task } from './Task'
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { fetchTasks } from "../http/taskApi";

export const TaskList = observer((props) => {
  const {todo, user} = useContext(Context)
  useEffect(() => {
    fetchTasks(undefined, todo.activePage, todo.sort).then(data => {
      todo.setTodos(data.rows)
      todo.setCountTodos(data.count)
    }).catch()
  }, [])
  return (
      <tbody>
        {
          todo.todos.map(todo => {
            return <Task 
              key={todo.id} 
              todoItem={todo}
              countTask={todo.count}
            />
          })
        }
      </tbody>
  );
})