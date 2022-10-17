import React, { useContext, useEffect } from "react";
import '../styles/taskList.scss'
import { Task } from './Task'
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { fetchTasks } from "../../http/taskApi";

export const TaskList = observer((props) => {
  const {task} = useContext(Context)
  useEffect(() => {
    fetchTasks(undefined, task.activePage, task.sort).then(data => {
      task.setTasks(data.rows)
      task.setCountTasks(data.count)
    }).catch()
  }, [])
  return (
      <tbody>
        {
          task.tasks.map(item => {
            return <Task 
              key={item.id} 
              taskItem={item}
              countTask={item.count}
            />
          })
        }
      </tbody>
  );
})