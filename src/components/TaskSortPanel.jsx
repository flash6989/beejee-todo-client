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
        console.log(res, 1)
        return
      }
      filterObj.filterName = filter
      if (todo.sort.direction === 'DESC') {
        filterObj.direction = 'ASC'
        todo.setSort(filterObj)
        const res = await fetchTasks(undefined, todo.activePage, todo.sort)
        todo.setTodos(res.rows)
        todo.setCountTodos(res.count)
        console.log(res)
        todo.setTask = 
        console.log(res, 2)
        return
      }
      filterObj.direction = 'DESC'
      todo.setSort(filterObj)
      const res = await fetchTasks(undefined, todo.activePage, todo.sort)
      todo.setTodos(res.rows)
      todo.setCountTodos(res.count)
      console.log(res, 3)
    } catch(e) {
      alert(e.response.data.message)
    }
   
  }
    return (
      <div className="container">
        <div className="task__filter-by">
        <div className="task__filter-by-text" onClick={() => setSortFields('text')}><p>Текст задачи</p><img className="task__img" src={arrow}/></div>
        <div className="task__filter-by-name" onClick={() => setSortFields('userName')}><p>Имя пользователя</p><img className="task__img" src={arrow}/></div>
        <div className="task__filter-by-email" onClick={() => setSortFields('email')}><p>Емайл пользователя</p><img className="task__img" src={arrow}/></div>
        {
          user.isAdmin ? 
          <div className="task__filter-by-empty"></div> :
          null
        }
      </div>
      </div>
    );
})