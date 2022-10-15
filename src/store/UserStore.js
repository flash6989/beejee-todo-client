import { makeAutoObservable } from "mobx"

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._isAdmin = false
    this._user = {}
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }
  setIsUser(user) {
    this._user = user
  }
  setIsAdmin(user) {
    this._user = user
  }
  get isAuth() {
    return this._isAuth
  }
  get user() {
    return this._isAdmin
  }
  get isAdmin() {
    return this._isAdmin
  }
}