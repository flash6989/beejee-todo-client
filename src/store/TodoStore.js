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
      id: 2,
      text: 'Задача 2',
      email: 'Email 2',
      userName: 'Имя 2',
      status: false,
      whoEdited: null,
    },
    {
      id: 3,
      text: 'Задача 3',
      email: 'Email 3',
      userName: 'Имя 3',
      status: false,
      whoEdited: 'admin',
    },
    {
      id: 4,
      text: 'Задача 4',
      email: 'Email 4',
      userName: 'Имя 4',
      status: false,
      whoEdited: null,
    },
    {
      id: 5,
      text: 'Задача 5',
      email: 'Email 5',
      userName: 'Имя 5',
      status: false,
      whoEdited: null,
    },
    {
      id: 6,
      text: 'Задача 6',
      email: 'Email 6',
      userName: 'Имя 6',
      status: false,
      whoEdited: 'admin',
    }
   ]
   this._editableTask = {}
    makeAutoObservable(this)
  }

  setTodos(todos) {
    this._todos = todos
  }
  setEditableTask(todo) {
    this._editableTask = todo
  }

  get todos() {
    return this._todos
  }
  get editableTask() {
    return this._editableTask
  }
 
}