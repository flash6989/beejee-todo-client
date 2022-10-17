import React from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";
import { TaskSortPanel} from './TaskSortPanel'
import '../styles/todosBody.scss'

export const TasksBody = (props) => {
  return (
      <div className="todos-body">
        <AddTask />
        <div className="container">
          <table className="table__tasks">
            <TaskSortPanel />
            <TaskList />
          </table>
        </div>
      </div>
  );
}