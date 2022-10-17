import { makeAutoObservable } from "mobx"

export default class TaskStore {
  constructor() {
   this._tasks = []
   this._editableTask = {}
   this._countTasks = 0
   this._activePage = 1
   this._sort = {filterName: 'text', direction: 'ASC'}
   this._limit = 3
    makeAutoObservable(this)
  }

  setTasks(tasks) {
    this._tasks = tasks
  }
  setEditableTask(task) {
    this._editableTask = task
  }
  setCountTasks(task) {
    this._countTasks = task
  }
  setSort(sort) {
    this._sort = sort
  }
  setActivePage(num) {
    this._activePage = num
  }

  get tasks() {
    return this._tasks
  }
  get editableTask() {
    return this._editableTask
  }
  get countTasks() {
    return this._countTasks
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