import React from "react";
import './styles/taskList.scss'
import { Task } from './Task'

export const TaskList = (props) => {
  return (
    <div className="container">
      <div className="task-list">
          <Task />
      </div>
    </div>
  );
}