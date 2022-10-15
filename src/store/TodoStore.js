import { makeAutoObservable } from "mobx"

export default class TodoStore {
  constructor() {
   this._todos = [
    {
      id: 1,
      text: 'Задача 1',
      email: 'Email 1',
      userName: 'Имя 1',
      status: false,
      whoEdited: null,
    },
    {
      id: 1,
      text: 'Задача 2',
      email: 'Email 2',
      userName: 'Имя 2',
      status: false,
      whoEdited: null,
    },
    {
      id: 2,
      text: 'Задача 3',
      email: 'Email 3',
      userName: 'Имя 3',
      status: false,
      whoEdited: null,
    }
   ]
    makeAutoObservable(this)
  }

  setTodos(todos) {
    this._todos = todos
  }

  get isTodos() {
    return this._todos
  }
 
}