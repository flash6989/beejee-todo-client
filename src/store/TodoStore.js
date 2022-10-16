import { makeAutoObservable } from "mobx"

export default class TodoStore {
  constructor() {
   this._todos = []
   this._editableTask = {}
   this._countTodos = 0
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

  get todos() {
    return this._todos
  }
  get editableTask() {
    return this._editableTask
  }
 
}