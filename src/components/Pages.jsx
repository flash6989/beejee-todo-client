import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "..";
import {Pagination} from "react-bootstrap";
import './styles/pagination.scss'
import { fetchTasks } from "../http/taskApi";

export const Pages = observer((props) => {
  const {todo} = useContext(Context)
  const [activePage, setActivePage] = useState(1)
  const limit = 3

const changeActivePage = async (number) => {
  const {count, rows} = await fetchTasks(limit, number)
  todo.setTodos(rows)
  console.log(count, rows)
  setActivePage(number)

}
const createArrCountPages = (countTodos) => {
const countPages = Math.ceil(countTodos / limit)
const arr = []
let count = 0
console.log(countPages)
for(const i in Array(countPages).fill(1)) {
  arr.push(count + 1)
  count += 1
}
console.log(arr)
return arr
}
return (
  <div>
    <Pagination className="pagination" size="lg">
      {createArrCountPages(todo.countTodos).map((number) => {
      return <Pagination.Item className={activePage === number ? 'pagination__item pagination__item_active': 'pagination__item'}  activeLabel="" onClick={() => changeActivePage(number)} key={number} active={number === activePage}>
        {number}
      </Pagination.Item>
      })}
    </Pagination>
  </div>
);
})