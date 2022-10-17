import React, { useContext, useState } from "react";
import { fetchTasks } from "../http/taskApi";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import {Pagination} from "react-bootstrap";

import './styles/pages.scss'

export const Pages = observer(() => {
  const {task} = useContext(Context)

const changeActivePage = async (number) => {
  if (number === task.activePage) return
  const {count, rows} = await fetchTasks(undefined, number, task.sort)
  task.setTasks(rows)
  task.setCountTasks(count)
  task.setActivePage(number)
}

const createArrCountPages = (countTasks) => {
  const countPages = Math.ceil(countTasks / task.limit)
  const arr = []
  let count = 0
  for(const i in Array(countPages).fill(1)) {
    arr.push(count + 1)
    count += 1
  }
  return arr
}

return (
  <div>
    <Pagination className="pages" size="lg">
      {createArrCountPages(task.countTasks).map((number) => {
        return <Pagination.Item 
        className={task.activePage === number ? 'pages__item pages__item_active': 'pages__item'}  
        activeLabel="" 
        onClick={() => changeActivePage(number)} 
        key={number} 
        active={number === task.activePage}
      >
          {number}
      </Pagination.Item>
      })}
    </Pagination>
  </div>
);
})