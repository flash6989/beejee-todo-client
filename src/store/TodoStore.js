import { makeAutoObservable } from "mobx"

export default class TodoStore {
  constructor() {
   this._todos = []
   this._editableTask = {}
   this._countTodos = 0
   this._activePage = 1
   this._sort = {filterName: 'text', direction: 'ASC'}
   this._limit = 3
    makeAutoObservable(this)
  }

  setTodos(todos) {
    this._todos = todos
  }
  setEditableTask(todo) {
    this._editableTask = todo
  }
  setCountTodos(count) {
    this._countTodos = count
  }
  setSort(sort) {
    this._sort = sort
  }
  setActivePage(num) {
    this._activePage = num
  }


  get todos() {
    return this._todos
  }
  get editableTask() {
    return this._editableTask
  }
  get countTodos() {
    return this._countTodos
  }
  get sort() {
    return this._sort
  }
  get activePage() {
    return this._activePage
  }
  get limit() {
    return this._limit
  }
 
}