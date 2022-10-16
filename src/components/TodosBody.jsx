import React from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { TaskSortPanel} from './TaskSortPanel'
import './styles/todosBody.scss'

export const TodosBody = (props) => {
  return (
      <div className="todos-body">
        <AddTask />
        <TaskSortPanel />
        <TaskList />
      </div>
  );
}