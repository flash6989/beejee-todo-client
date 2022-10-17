import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "..";
import {Pagination} from "react-bootstrap";
import './styles/pagination.scss'
import { fetchTasks } from "../http/taskApi";

export const Pages = observer((props) => {
  const {todo} = useContext(Context)
  const limit = 3

const changeActivePage = async (number) => {
  if (number === todo.activePage) return
  const {count, rows} = await fetchTasks(undefined, number, todo.sort)
  todo.setTodos(rows)
  todo.setActivePage(number)
}
const createArrCountPages = (countTodos) => {
const countPages = Math.ceil(countTodos / todo.limit)
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
    <Pagination className="pagination" size="lg">
      {createArrCountPages(todo.countTodos).map((number) => {
        return <Pagination.Item 
        className={todo.activePage === number ? 'pagination__item pagination__item_active': 'pagination__item'}  
        activeLabel="" 
        onClick={() => changeActivePage(number)} 
        key={number} 
        active={number === todo.activePage}
      >
          {number}
      </Pagination.Item>
      })}
    </Pagination>
  </div>
);
})