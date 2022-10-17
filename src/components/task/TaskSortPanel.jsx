import React, { useContext } from "react";
import { Context } from "../..";
import { observer } from 'mobx-react-lite';
import { fetchTasks } from '../../http/taskApi';

import '../styles/taskSortPanel.scss'
import arrow from '../../assets/arrow.svg';

export const TaskSortPanel = observer(() => {
  const {user, task} = useContext(Context)
  const fetchTasksAndSave = async () => {
    const res = await fetchTasks(undefined, task.activePage, task.sort)
    task.setTasks(res.rows)
    task.setCountTasks(res.count)
  }
  
  const setSortFields = async (filter) => {
    try {
      const filterObj = { filterName: '', direction: '' }
      if (!task.sort.filterName || task.sort.filterName !== filter ) {
        filterObj.filterName = filter
        filterObj.direction = 'DESC'
        task.setSort(filterObj)
        fetchTasksAndSave()
        return
      }
      filterObj.filterName = filter
      if (task.sort.direction === 'DESC') {
        filterObj.direction = 'ASC'
        task.setSort(filterObj)
        fetchTasksAndSave()
        return
      }
      filterObj.direction = 'DESC'
      task.setSort(filterObj)
      fetchTasksAndSave()
    } catch(e) {
      alert.log(e.response.data.message)
    }
  }
    return (
      <thead>
        <tr className="task__filter-by">
          <th className="task__filter-by-text" onClick={() => setSortFields('text')}>Текст задачи<img className={task.sort.filterName === 'text' && task.sort.direction === 'DESC' ? 'task__img' : 'task__img_upend'} src={arrow}/></th>
          <th className="task__filter-by-name" onClick={() => setSortFields('userName')}>Имя пользователя<img className={task.sort.filterName === 'userName' && task.sort.direction === 'DESC' ? 'task__img' : 'task__img_upend'} src={arrow}/></th>
          <th className="task__filter-by-email" onClick={() => setSortFields('email')}>Емайл пользователя<img className={task.sort.filterName === 'email' && task.sort.direction === 'DESC' ? 'task__img' : 'task__img_upend'} src={arrow}/></th>
          {
            user.isAdmin ? 
            <th className="task__filter-by-empty"></th> :
            null
          }
        </tr>
      </thead>
    );
})