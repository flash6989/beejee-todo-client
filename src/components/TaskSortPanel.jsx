import arrow from '../assets/arrow.svg';
import React, { useContext, useState } from "react";
import { Context } from "..";

import './styles/taskSortPanel.scss'
import { observer } from 'mobx-react-lite';
import { fetchTasks } from '../http/taskApi';

export const TaskSortPanel = observer((props) => {
  const {user, todo} = useContext(Context)
  const [filter, setFilter] = useState({filterName: '', direction: ''})

  
  const setSortFields = async (filter) => {
    try {
      const filterObj = { filterName: '', direction: '' }
      if (!todo.sort.filterName || todo.sort.filterName !== filter ) {
        filterObj.filterName = filter
        filterObj.direction = 'DESC'
        todo.setSort(filterObj)
        const res = await fetchTasks(undefined, todo.activePage, todo.sort)
        todo.setTodos(res.rows)
        todo.setCountTodos(res.count)
        return
      }
      filterObj.filterName = filter
      if (todo.sort.direction === 'DESC') {
        filterObj.direction = 'ASC'
        todo.setSort(filterObj)
        const res = await fetchTasks(undefined, todo.activePage, todo.sort)
        todo.setTodos(res.rows)
        todo.setCountTodos(res.count)
        return
      }
      filterObj.direction = 'DESC'
      todo.setSort(filterObj)
      const res = await fetchTasks(undefined, todo.activePage, todo.sort)
      todo.setTodos(res.rows)
      todo.setCountTodos(res.count)
    } catch(e) {
      alert(e.response.data.message)
    }
   
  }
    return (
      <thead>
        <tr className="task__filter-by">
          <th className="task__filter-by-text" onClick={() => setSortFields('text')}>Текст задачи<img className={todo.sort.filterName === 'text' && todo.sort.direction === 'DESC' ? 'task__img' : 'task__img_upend'} src={arrow}/></th>
          <th className="task__filter-by-name" onClick={() => setSortFields('userName')}>Имя пользователя<img className={todo.sort.filterName === 'userName' && todo.sort.direction === 'DESC' ? 'task__img' : 'task__img_upend'} src={arrow}/></th>
          <th className="task__filter-by-email" onClick={() => setSortFields('email')}>Емайл пользователя<img className={todo.sort.filterName === 'email' && todo.sort.direction === 'DESC' ? 'task__img' : 'task__img_upend'} src={arrow}/></th>
          {
            user.isAdmin ? 
            <th className="task__filter-by-empty"></th> :
            null
          }
        </tr>
      </thead>
    );
})